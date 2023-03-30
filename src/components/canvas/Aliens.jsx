import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Aliens = ({ isMobile }) => {
    const alien = useGLTF('./aliens/abduction.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={.45} groundColor="black" />
            <pointLight intensity={3} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={.7}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />
            <primitive
                object={alien.scene}
                scale={isMobile ? 0.5 : 10}
                position={[0, -1.55, -1.5]}
                rotation={[0, 0, 0]} />
        </mesh>
    )
}

const AliensCanvas = () => {
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
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Aliens isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default AliensCanvas