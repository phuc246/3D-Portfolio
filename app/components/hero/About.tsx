import { Text } from "@react-three/drei";
import { useEffect, useState } from "react";

const fullText = `I 'm a proactive web developer passionate about fullstack development and data processing`;

const About = () => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (i < fullText.length) {
          return prev + fullText[i];
        }
        return prev;
      });
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <Text
      position={[0, -1, -10]}
      font="./soria-font.ttf"
      fontSize={1.2}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      {displayed}
    </Text>
  );
};

export default About; 