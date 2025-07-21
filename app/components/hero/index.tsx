'use client';

import { Text } from "@react-three/drei";

import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CloudContainer from "../models/Cloud";
import WindowModel from "../models/WindowModel";
import TextWindow from "./TextWindow";
import About from "./About";

const Hero = () => {
  const titleRef = useRef<THREE.Mesh>(null);
  const { progress } = useProgress();
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    if (progress === 100 && titleRef.current) {
      gsap.fromTo(titleRef.current.position, {
        y: -10,
        duration: 1,
      }, {
        y: 0,
        duration: 3,
        onComplete: () => setShowAbout(true)
      });
    }
  }, [progress]);

  const fontProps = {
    font: "./soria-font.ttf",
    fontSize: 1.2,
  };

  return (
    <>
      <Text position={[0, 2, -10]} {...fontProps} ref={titleRef}>Hi, I am Pin Lee.</Text>
      {showAbout && <About />}
      <CloudContainer/>
      <group position={[0, -25, 5.69]}>
        <pointLight castShadow position={[1, 1, -2.5]} intensity={60} distance={10}/>
        <WindowModel receiveShadow/>
        <TextWindow/>
      </group>
    </>
  );
};

export default Hero;
