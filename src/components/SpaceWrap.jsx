import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

const StarWrapLines = ({ lineCount }) => {
  const ref = useRef();

  const { width, height } = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const position = new Float32Array(6 * lineCount);
  const velocity = new Float32Array(2 * lineCount);

  const positionArray = ref.current.geometry.attributes.position.array;
  const velocityArray = ref.current.geometry.attributes.velocity.array;

  for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
    const x1 = Math.random() * width - width / 2;
    const y1 = Math.random() * height - height / 2;
    const z1 = Math.random() * 400 - 200;
    const x2 = x1;
    const y2 = y1;
    const z2 = z1;

    position.set([x1, y1, z1, x2, y2, z2], 6 * lineIndex);

    velocity.set([0, 0], 2 * lineIndex);
  }

  useFrame(() => {
    console.log(ref.current.geometry.attributes.position)
    // const positionArray = ref.current.geometry.attributes.position.array;
    // const velocityArray = ref.current.geometry.attributes.velocity.array;

    for (let lineIndex = 0; lineIndex < lineCount; lineIndex++) {
      velocityArray[2 * lineIndex] += 0.03;
      velocityArray[2 * lineIndex + 1] += 0.025;

      positionArray[6 * lineIndex + 2] += velocityArray[2 * lineIndex];
      positionArray[6 * lineIndex + 5] += velocityArray[2 * lineIndex + 1];

      if (positionArray[6 * lineIndex + 5] > 200) {
        const z = Math.random() * 200 - 100;
        positionArray[6 * lineIndex + 2] = z;
        positionArray[6 * lineIndex + 5] = z;
        velocityArray[2 * lineIndex] = 0;
        velocityArray[2 * lineIndex + 1] = 0;
      }
    }

    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <lineSegments ref={ref}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          array={position}
          count={lineCount * 2}
          itemSize={3}
        />
        <bufferAttribute
          attachObject={["attributes", "velocity"]}
          array={velocity}
          count={lineCount}
          itemSize={1}
        />
      </bufferGeometry>
      <lineBasicMaterial attach="material" color={0xffffff} />
    </lineSegments>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 0, 200], fov: 60 }}
      // pixelRatio={Math.min(window.devicePixelRatio, 2)}
      onCreated={({ gl }) => {
        gl.setSize(window.innerWidth, window.innerHeight);
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        gl.outputEncoding = THREE.sRGBEncoding;
      }}
      onResize={({ gl }) => {
        gl.setSize(window.innerWidth, window.innerHeight);
      }}
    >
      <ambientLight />
      <StarWrapLines lineCount={5000} />
    </Canvas>
  );
};

export default App;
