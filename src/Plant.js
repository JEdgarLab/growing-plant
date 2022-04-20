import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/plant.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group position={[0, 0.92, 0]}>
          <mesh name="Vert002" geometry={nodes.Vert002.geometry} material={materials['Material.002']} position={[0, -1.12, 0]} scale={0.13}>
            <mesh name="Vert003" geometry={nodes.Vert003.geometry} material={materials['Material.002']} position={[0.2, -0.13, 1.67]} rotation={[-0.88, -0.8, -2.88]} scale={0.4} />
            <mesh name="Vert004" geometry={nodes.Vert004.geometry} material={materials['Material.002']} position={[0.18, 0.05, 2.41]} rotation={[0.72, 0.55, 0.02]} scale={0.4} />
            <mesh name="Vert005" geometry={nodes.Vert005.geometry} material={materials['Material.002']} position={[0.15, -0.04, 3.41]} rotation={[-0.81, 0.54, -2.98]} scale={0.4} />
            <mesh name="Vert006" geometry={nodes.Vert006.geometry} material={materials['Material.002']} position={[0.13, 0.07, 4.39]} rotation={[-Math.PI, 0, -Math.PI]} scale={0} />
            <mesh name="Vert007" geometry={nodes.Vert007.geometry} material={materials['Material.002']} position={[0.09, -0.04, 5.7]} rotation={[-Math.PI, 0, -Math.PI]} scale={0} />
            <mesh name="Vert008" geometry={nodes.Vert008.geometry} material={materials['Material.002']} position={[0.05, -0.01, 7]} rotation={[-Math.PI, 0, -Math.PI]} scale={0} />
            <mesh name="Vert009" geometry={nodes.Vert009.geometry} material={materials['Material.002']} position={[0.03, 0, 7.9]} rotation={[-Math.PI, 0, -Math.PI]} scale={0} />
          </mesh>
        </group>
        <group name="Camera" position={[2.6, 4.94, -6.02]} rotation={[2.11, 0.22, -2.8]} />
        <group name="Area" position={[0, 13.09, 0]} />
        <group name="Area001" position={[-8.47, 23.88, 8.92]} rotation={[0.62, -0.66, 0.41]} />
        <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Circle.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Circle001.geometry} material={materials['Material.004']} position={[0, 1.05, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/plant.glb')
