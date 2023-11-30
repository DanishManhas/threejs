import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";
import { Suspense } from "react";

// import { ErrorBoundary } from "@react-three/fiber/dist/declarations/src/core/utils";

const CanvasModel = () => {
  return (
    <Suspense>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        {/* <CameraRig> */}
        {/* <Backdrop/> */}
        <Center>
          <Shirt />
        </Center>
        {/* </CameraRig> */}
      </Canvas>
    </Suspense>
  );
};

export default CanvasModel;
