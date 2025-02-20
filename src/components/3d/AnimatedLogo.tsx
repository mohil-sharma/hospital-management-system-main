import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Mesh } from "three";

function AnimatedShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <meshStandardMaterial
        color="#6366f1"
        roughness={0.3}
        metalness={0.8}
        wireframe={true}
      />
    </mesh>
  );
}

export const AnimatedLogo = () => {
  return (
    <div className="h-[400px] w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <AnimatedShape />
      </Canvas>
    </div>
  );
};