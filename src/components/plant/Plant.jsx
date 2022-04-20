import "./Plant.scss"

import React, { useRef, useEffect } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"

import PlantGLTF from "../../models/plant.gltf"

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(PlantGLTF);
  const { actions } = useAnimations(animations, group);
	
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Vert001" position={[0, 0.9, 0]}>
          <mesh
            name="Vert002"
            castShadow
            receiveShadow
            geometry={nodes.Vert002.geometry}
            material={nodes.Vert002.material}
            position={[0, -1.1, 0]}
            scale={0.1}
          >
            <mesh
              name="Vert003"
              castShadow
              receiveShadow
              geometry={nodes.Vert003.geometry}
              material={nodes.Vert003.material}
              position={[0.2, -0.1, 1.7]}
              rotation={[-0.9, -0.8, -2.9]}
              scale={[0.4, 0.4, 0.4]}
            />
            <mesh
              name="Vert004"
              castShadow
              receiveShadow
              geometry={nodes.Vert004.geometry}
              material={nodes.Vert004.material}
              position={[0.2, 0.1, 2.4]}
              rotation={[0.7, 0.6, 0]}
              scale={[0.4, 0.4, 0.4]}
            />
            <mesh
              name="Vert005"
              castShadow
              receiveShadow
              geometry={nodes.Vert005.geometry}
              material={nodes.Vert005.material}
              position={[0.2, 0, 3.4]}
              rotation={[-0.8, 0.5, -3]}
              scale={[0.4, 0.4, 0.4]}
            />
            <mesh
              name="Vert006"
              castShadow
              receiveShadow
              geometry={nodes.Vert006.geometry}
              material={nodes.Vert006.material}
              position={[0.1, 0.1, 4.4]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0}
            />
            <mesh
              name="Vert007"
              castShadow
              receiveShadow
              geometry={nodes.Vert007.geometry}
              material={nodes.Vert007.material}
              position={[0.1, 0, 5.7]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0}
            />
            <mesh
              name="Vert008"
              castShadow
              receiveShadow
              geometry={nodes.Vert008.geometry}
              material={nodes.Vert008.material}
              position={[0.1, 0, 7]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0}
            />
            <mesh
              name="Vert009"
              castShadow
              receiveShadow
              geometry={nodes.Vert009.geometry}
              material={nodes.Vert009.material}
              position={[0, 0, 7.9]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={0}
            />
          </mesh>
        </group>
        <group
          name="Camera"
          position={[2.6, 4.9, -6]}
          rotation={[2.1, 0.2, -2.8]}
        />
        <group name="Area" position={[0, 13.1, 0]} />
        <group
          name="Area001"
          position={[-8.5, 23.9, 8.9]}
          rotation={[0.6, -0.7, 0.4]}
        />
        <group
          name="Area002"
          position={[12.2, 3.7, 0.2]}
          rotation={[1.6, 0.1, -1.6]}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          name="Circle"
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          name="Circle001"
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["Material.004"]}
          position={[0, 1.1, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(PlantGLTF);


