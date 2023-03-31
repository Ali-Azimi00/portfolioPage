import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Moons = ({ isMobile }) => {
    const moons = useGLTF('./fourMoons/fourMoons.gltf')
    //#915eff

    return (
        <mesh>
            <hemisphereLight intensity={.75} groundColor="#915eff" />
            <pointLight intensity={.65} position={[0, 30, 0]} />
            <spotLight
                // position={[-20, 50, 10]}
                position={[0, 0, 0]}
                // angle={0.12}
                angle={3.6}
                penumbra={1}
                intensity={.9}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={moons.scene}
                scale={isMobile ? 0.5 : 15}
                position={[0, -.9, -3.5]}
                rotation={[0, 0, 0]} />
        </mesh>
    )
}

const MoonsCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }

        mediaQuery.addEventListener('change',
            handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change',
                handleMediaQueryChange);
        }

    }, []);

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={(Math.PI / 2) - .1}
                    minPolarAngle={(Math.PI / 2) - .15}
                />
                <Moons isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default MoonsCanvas