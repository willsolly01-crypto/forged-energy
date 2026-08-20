"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js";

/**
 * Interactive 3D viewer for the FORGED pouch.
 * Drag to rotate, scroll/pinch to zoom, auto-rotates when idle.
 */
export default function ModelViewer({
  objPath = "/models/forged_pouch_3d/forged_pouch.obj",
  mtlPath = "/models/forged_pouch_3d/forged_pouch.mtl",
  labelPath = "/models/forged_pouch_3d/forged_pouch_label.png",
  autoRotate = true,
  height = "600px",
  className = "",
}: {
  objPath?: string;
  mtlPath?: string;
  labelPath?: string;
  autoRotate?: boolean;
  height?: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let disposed = false;

    // Scene — transparent so it blends with the site's ink background
    const scene = new THREE.Scene();

    const width_px = container.clientWidth || 800;
    const height_px = container.clientHeight || 600;

    const camera = new THREE.PerspectiveCamera(
      45,
      width_px / height_px,
      0.1,
      1000
    );
    camera.position.set(0, 1.5, 2.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width_px, height_px);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 3-point lighting, gold rim light for brand consistency
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.0);
    keyLight.position.set(5, 4, 3);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.45);
    fillLight.position.set(-5, 3, 3);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xf2b705, 0.9); // brand gold
    rimLight.position.set(0, 2, -5);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambientLight);

    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();

    const loadModel = async () => {
      try {
        const materials = await mtlLoader.loadAsync(mtlPath);
        materials.preload();
        objLoader.setMaterials(materials);

        const object = await objLoader.loadAsync(objPath);

        const texture = await new Promise<THREE.Texture>((resolve, reject) => {
          new THREE.TextureLoader().load(labelPath, resolve, undefined, reject);
        });
        texture.colorSpace = THREE.SRGBColorSpace;

        // Center + scale to a consistent on-screen size regardless of source units
        const box = new THREE.Box3().setFromObject(object);
        const size = new THREE.Vector3();
        box.getSize(size);
        const center = new THREE.Vector3();
        box.getCenter(center);
        const maxDim = Math.max(size.x, size.y, size.z) || 1;
        const scale = 1.6 / maxDim;
        object.scale.setScalar(scale);
        object.position.sub(center.multiplyScalar(scale));

        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material && !(child.material as THREE.MeshPhongMaterial).map) {
              (child.material as THREE.MeshPhongMaterial).map = texture;
              child.material.needsUpdate = true;
            }
          }
        });

        if (disposed) return;
        scene.add(object);
        modelRef.current = object;
        setLoading(false);
      } catch (err) {
        console.error("FORGED model load error:", err);
        if (!disposed) {
          setError("Couldn't load the 3D model");
          setLoading(false);
        }
      }
    };

    loadModel();

    // Drag to rotate
    let isDragging = false;
    let prev = { x: 0, y: 0 };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      prev = { x: e.clientX, y: e.clientY };
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging || !modelRef.current) return;
      const dx = e.clientX - prev.x;
      const dy = e.clientY - prev.y;
      modelRef.current.rotation.y += dx * 0.006;
      modelRef.current.rotation.x += dy * 0.006;
      prev = { x: e.clientX, y: e.clientY };
    };
    const onPointerUp = () => {
      isDragging = false;
    };

    renderer.domElement.style.touchAction = "none";
    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // Scroll to zoom
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z *= e.deltaY < 0 ? 0.9 : 1.1;
      camera.position.z = Math.max(1.2, Math.min(6, camera.position.z));
    };
    renderer.domElement.addEventListener("wheel", onWheel, { passive: false });

    // Pinch to zoom (mobile)
    let pinchStart = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        pinchStart = Math.hypot(dx, dy);
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && pinchStart > 0) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        camera.position.z = Math.max(
          1.2,
          Math.min(6, camera.position.z / (dist / pinchStart))
        );
        pinchStart = dist;
      }
    };
    renderer.domElement.addEventListener("touchstart", onTouchStart, {
      passive: true,
    });
    renderer.domElement.addEventListener("touchmove", onTouchMove, {
      passive: false,
    });

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (modelRef.current && autoRotate && !isDragging) {
        modelRef.current.rotation.y += 0.005;
      }
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = container.clientWidth || 800;
      const h = container.clientHeight || 600;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("wheel", onWheel);
      renderer.domElement.removeEventListener("touchstart", onTouchStart);
      renderer.domElement.removeEventListener("touchmove", onTouchMove);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
          mats.forEach((m) => m.dispose());
        }
      });
      renderer.dispose();
    };
  }, [objPath, mtlPath, labelPath, autoRotate]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-3xl bg-panel ring-1 ring-white/10 ${className}`}
      style={{ height, cursor: loading || error ? "default" : "grab" }}
    >
      {loading && !error && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-panel">
          <div className="text-center">
            <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-gold-500 border-t-transparent" />
            <p className="text-sm text-white/60">Loading 3D model…</p>
          </div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-panel">
          <div className="max-w-xs text-center px-6">
            <p className="font-semibold text-warning">⚠ {error}</p>
            <p className="mt-2 text-xs text-white/40">
              Check that the model files are in /public/models/forged_pouch_3d
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
