import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");

  // Loop through all materials in the GLTF and set side to FrontSide
  earth.scene.traverse((node) => {
    if (node.isMesh) {
      node.material.side = THREE.FrontSide;
    }
  });

  return (
    <mesh>
      <pointLight position={[10, 10, 10]} intensity={100} />
      <pointLight position={[-10, 10, 10]} intensity={100} />
      <pointLight position={[10, 10, -10]} intensity={100} />
      <pointLight position={[-10, 10, -10]} intensity={100} />
      <primitive object={earth.scene} scale={isMobile ? 2 : 1.4} position-y={isMobile ? 0 : 0} rotation-y={0} />
    </mesh>
  );
};

const EarthCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
