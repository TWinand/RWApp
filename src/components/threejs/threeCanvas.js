import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'


function Model() {
    const { scene } = useGLTF('/models/DeepSpace.glb'); // Pfad zu deinem Modell
    return <primitive object={scene} />;
}


export function ThreeCanvas() {


    return (
        <Canvas>
            <OrbitControls />
            <ambientLight />
            <Suspense>
                <Model />

            </Suspense>
        </Canvas>
    )
}
