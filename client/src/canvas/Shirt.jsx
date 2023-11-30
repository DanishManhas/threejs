import React, { useEffect } from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import threeDImage from './../assets/shirt_baked.glb'

import state from "../store";

const Shirt =   () => {
  const snap = useSnapshot(state);


    const LoadData =  () => {
      try {
        const { nodes, materials } = useGLTF(threeDImage);
        return {nodes, materials};
      } catch (loaderError) {
        console.log("the gltf loader has an error", loaderError);
      }
      // try {
        // const logoTexture = await useTexture(snap.logoDecal);
        // const full = await useTexture(snap.fullDecal);
      // } catch (useTextureError) {
        // console.log("Texture loading has Failed", useTextureError);
      // }
    };
    
  
  const {nodes, materials} = LoadData();
  // const { nodes, materials } = useGLTF(threeDImage);
  return (
    <group>
      
 {nodes && materials && (
  <mesh
    castShadow
    geometry={nodes.T_Shirt_male.geometry}
    material={materials.lambert1}
    material-roughness={1} // Incorrect
    dispose={null}
  >
        {/* {snap.isFullTexture && ( 
          <Decal 
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}

        {snap.isLogoTexture && (
          <Decal 
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )} 
        */}
      </mesh>)}
    </group>
  );
};

export default Shirt;
