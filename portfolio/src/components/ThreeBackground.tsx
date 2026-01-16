import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
    const count = 2000;
    const mesh = useRef<THREE.Points>(null!);

    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 15; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z
        }
        return positions;
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.y = time * 0.05;
            mesh.current.rotation.x = time * 0.02;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.length / 3}
                    array={particlesPosition}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.02}
                color="#0aff0a"
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
            />
        </points>
    );
};

const CyberGrid = () => {
    // A rotating wireframe sphere to give depth
    return (
        <mesh rotation={[0.4, 0.2, 0]}>
            <sphereGeometry args={[7, 32, 32]} />
            <meshBasicMaterial
                color="#bc13fe"
                wireframe
                transparent
                opacity={0.05}
            />
        </mesh>
    );
}

const ThreeBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-60">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <fog attach="fog" args={['#050505', 5, 15]} />
                <ParticleField />
                <CyberGrid />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
