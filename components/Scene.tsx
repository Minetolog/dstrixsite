import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Slow rotation
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere args={[1, 64, 64]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color="#2a2a2a"
          attach="material"
          distort={0.4} // Strength of distortion
          speed={1.5} // Speed of distortion
          roughness={0.4}
          metalness={0.2}
          bumpScale={0.005}
          clearcoat={1}
          clearcoatRoughness={0.1}
          radius={1}
        />
      </Sphere>
    </Float>
  );
};

const BackgroundScene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 opacity-40 pointer-events-none w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#404040" />
          <pointLight position={[0, 5, 0]} intensity={1} color="#ffffff" />
          
          <AnimatedShape />
          <fog attach="fog" args={['#050505', 5, 20]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BackgroundScene;