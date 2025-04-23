import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Car = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/car1.glb');

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  useFrame((state, delta)=> easing.dampC(materials.forMayaAOlambert17.color, snap.color, 0.25, delta));
  materials.forMayaAOfrontLights.color.set('lightyellow');
  materials.forMayaAOphong2.color.set('black');
  materials.Chrome.color.set('silver');
  materials.mafina2hdrilambert9.color.set('grey');
  materials.mafina2hdrilambert9.opacity = 0.2;  // Low opacity (adjust as needed)
  materials.mafina2hdrilambert9.transparent = true;  

  const stateString= JSON.stringify(snap);
  return (
    <group dispose={null} key={stateString}>
      <group scale={0.01}>
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpolySurface29_forMayaAOblinn6_0.geometry}
          material={materials.forMayaAOblinn6}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpolySurface29_forMayaAOblinn7_0.geometry}
          material={materials.forMayaAOblinn7}
        />
      </group>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpolySurface200_Chrome_0.geometry}
          material={materials.Chrome}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpolySurface200_forMayaAOGrill2_0.geometry}
          material={materials.forMayaAOGrill2}
        />
      </group>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpSphere3_forMayaAOblinn6_0.geometry}
          material={materials.forMayaAOblinn6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpSphere3_forMayaAOblinn10_0.geometry}
          material={materials.forMayaAOblinn10}
        />
      </group>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpolySurface316_Chrome_0.geometry}
          material={materials.Chrome}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpolySurface316_forMayaAOphong5_0.geometry}
          material={materials.forMayaAOphong5}
        />
      </group>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOtruba_Chrome_0.geometry}
          material={materials.Chrome}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOtruba_forMayaAOlambert15_0.geometry}
          material={materials.forMayaAOlambert15}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOtruba_forMayaAOmi_car_paint_phen2_0.geometry}
          material={materials.forMayaAOmi_car_paint_phen2}
        />
      </group>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface319_forMayaAOphong5_0.geometry}
          material={materials.forMayaAOphong5}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface319_Chrome_0.geometry}
          material={materials.Chrome}
        />
      </group>
      {/* main */}
      <group scale={0.01}> 
      <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpolySurface322_forMayaAOlambert17_0.geometry}
          material={materials.forMayaAOlambert17}
        >
        
  
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpolySurface322_forMayaAOlambert16_0.geometry}
          material={materials.forMayaAOlambert16}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface320_forMayaAOlambert16_0.geometry}
        material={materials.forMayaAOlambert16}
        scale={0.01}
      />
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpolySurface327_forMayaAOlambert17_0.geometry}
          material={materials.forMayaAOlambert17}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.forMayaAOpolySurface327_Chrome_0.geometry}
          material={materials.Chrome}
        />
      </group>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface322_forMayaAOblinn6_0.geometry}
          material={materials.forMayaAOblinn6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface322_forMayaAOblinn9_0.geometry}
          material={materials.forMayaAOblinn9}
        />
      </group>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface5_forMayaAOblinn9_0.geometry}
          material={materials.forMayaAOblinn9}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface5_forMayaAOblinn6_0.geometry}
          material={materials.forMayaAOblinn6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface5_forMayaAOlambert16_0.geometry}
          material={materials.forMayaAOlambert16}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface5_Chrome_0.geometry}
          material={materials.Chrome}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface5_forMayaAOblinn7_0.geometry}
          material={materials.forMayaAOblinn7}
        />
      </group>
      <group position={[-0.043, 0.088, 0.122]} rotation={[Math.PI / 2, 0, 0]} scale={0.003}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pTorus1_Chrome_2_0.geometry}
          material={materials.Chrome_2}
          position={[-1, 0, 11]}
          scale={[0.668, 1, 0.668]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube1_lamp1_0.geometry}
          material={materials.lamp1}
          position={[-1, 0.673, 11]}
          scale={[1.011, 0.896, 0.896]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pTorus2_Chrome_2_0.geometry}
          material={materials.Chrome_2}
          position={[27.079, 0, 11]}
          scale={[0.668, 1, 0.668]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube2_lamp1_0.geometry}
          material={materials.lamp1}
          position={[27.079, 0.673, 11]}
          scale={[1.011, 0.896, 0.896]}
        />
      </group>
      <group position={[0, 0.052, -0.046]} rotation={[-0.258, 0, 0]} scale={0.006}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface347_logo222_0.geometry}
          material={materials.logo222}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface347_Chrome_2_0.geometry}
          material={materials.Chrome_2}
        />
      </group>
      <group position={[-0.03, 0.084, -0.029]} rotation={[-0.077, -0.268, -0.018]} scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube4_miror_0.geometry}
          material={materials.miror}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pCube4_Chrome_2_0.geometry}
          material={materials.Chrome_2}
        />
      </group>
      <group
        position={[-0.31, 0.122, -0.032]}
        rotation={[Math.PI / 2, -0.199, 0.269]}
        scale={0.009}>
        <group position={[30.671, 0.514, -0.625]} rotation={[0.457, 0.247, 0]} scale={0.158}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface351_chromedvorn_0.geometry}
            material={materials.chromedvorn}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface352_chromedvorn_0.geometry}
            material={materials.chromedvorn}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface353_chromedvorn_0.geometry}
            material={materials.chromedvorn}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface354_rezinDvorn_0.geometry}
            material={materials.rezinDvorn}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface355_chromedvorn_0.geometry}
            material={materials.chromedvorn}
          />
        </group>
        <group position={[0.326, 5.83, -0.37]} rotation={[0.088, -0.021, -0.146]}>
          <group position={[0.141, 0, 1.897]} rotation={[0, 0.047, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder1_Chrome_2_0.geometry}
              material={materials.Chrome_2}
              position={[40.236, 0.531, -2.191]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={0.938}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder2_chromedvorn_0.geometry}
              material={materials.chromedvorn}
              position={[40.844, 0.533, -1.95]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.41, 0.503, 0.41]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pCylinder3_rezinDvorn_0.geometry}
              material={materials.rezinDvorn}
              position={[40.844, 0.533, -1.932]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.461, 0.565, 0.461]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface349_Chrome_2_0.geometry}
            material={materials.Chrome_2}
            position={[36.369, 2.638, -3.803]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.075, 0.105, 0.105]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pCylinder4_chromedvorn_0.geometry}
            material={materials.chromedvorn}
            position={[38.292, 0.534, -2.192]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.413, 5.55, 0.413]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface45_forMayaAOmi_car_paint_phen2_0.geometry}
        material={materials.forMayaAOmi_car_paint_phen2}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface317_forMayaAOmi_car_paint_phen2_0.geometry}
        material={materials.forMayaAOmi_car_paint_phen2}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface318_forMayaAOmi_car_paint_phen2_0.geometry}
        material={materials.forMayaAOmi_car_paint_phen2}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface274_forMayaAOmi_car_paint_phen2_0.geometry}
        material={materials.forMayaAOmi_car_paint_phen2}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOReshotka_Chrome_0.geometry}
        material={materials.Chrome}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOznachok_forMayaAOAlpha_0.geometry}
        material={materials.forMayaAOAlpha}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface133_forMayaAOblinn6_0.geometry}
        material={materials.forMayaAOblinn6}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface197_forMayaAOphong5_0.geometry}
        material={materials.forMayaAOphong5}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpPipe6_Chrome_0.geometry}
        material={materials.Chrome}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCube4_forMayaAOlambert16_0.geometry}
        material={materials.forMayaAOlambert16}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCube1_forMayaAOlambert15_0.geometry}
        material={materials.forMayaAOlambert15}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface148_forMayaAOblinn11_0.geometry}
        material={materials.forMayaAOblinn11}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface149_forMayaAOblinn11_0.geometry}
        material={materials.forMayaAOblinn11}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface150_forMayaAOblinn11_0.geometry}
        material={materials.forMayaAOblinn11}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface151_forMayaAOblinn11_0.geometry}
        material={materials.forMayaAOblinn11}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface168_forMayaAOlambert15_0.geometry}
        material={materials.forMayaAOlambert15}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface166_forMayaAOmi_car_paint_phen2_0.geometry}
        material={materials.forMayaAOmi_car_paint_phen2}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface171_forMayaAOlambert15_0.geometry}
        material={materials.forMayaAOlambert15}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface181_forMayaAOphong5_0.geometry}
        material={materials.forMayaAOphong5}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface191_forMayaAOmi_car_paint_phen2_0.geometry}
        material={materials.forMayaAOmi_car_paint_phen2}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCylinder7_forMayaAOphong5_0.geometry}
        material={materials.forMayaAOphong5}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOnomer_forMayaAOnumber_0.geometry}
        material={materials.forMayaAOnumber}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOznachok1_logo222_0.geometry}
        material={materials.logo222}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCube5_forMayaAOlambert16_0.geometry}
        material={materials.forMayaAOlambert16}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCube6_forMayaAOlambert15_0.geometry}
        material={materials.forMayaAOlambert15}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCylinder1_forMayaAOlambert13_0.geometry}
        material={materials.forMayaAOlambert13}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpPipe5_Chrome_0.geometry}
        material={materials.Chrome}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCube9_forMayaAOlambert16_0.geometry}
        material={materials.forMayaAOlambert16}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCylinder8_forMayaAOlambert13_0.geometry}
        material={materials.forMayaAOlambert13}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface292_Chrome_0.geometry}
        material={materials.Chrome}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface83_Chrome_2_0.geometry}
        material={materials.Chrome_2}
        scale={0.01}
      />
      {/* light */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOfaraz2_forMayaAOfrontLights_0.geometry}
        material={materials.forMayaAOfrontLights}
        scale={0.01}
      >
        {snap.isFullTexture &&(
  <Decal
    position={[0,0,0]}
    rotation={[0,0,0]}
    scale={2}
    map={fullTexture}
  />
)}

{snap.isLogoTexture &&(
  <Decal
    position={[0,0,0]}
    rotation={[0,0,0]}
    scale={0.15}
    map={logoTexture}
  />
)}
</mesh>

      
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOfaraz1_forMayaAOrear_lights_0.geometry}
        material={materials.forMayaAOrear_lights}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface309_forMayaAOblinn6_0.geometry}
        material={materials.forMayaAOblinn6}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface295_Chrome_0.geometry}
        material={materials.Chrome}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface297_forMayaAOmi_car_paint_phen2_0.geometry}
        material={materials.forMayaAOmi_car_paint_phen2}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCylinder10_Chrome_0.geometry}
        material={materials.Chrome}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpSphere2_forMayaAOfrontLights_0.geometry}
        material={materials.forMayaAOfrontLights}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpTorus1_Chrome_0.geometry}
        material={materials.Chrome}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface310_forMayaAOlambert15_0.geometry}
        material={materials.forMayaAOlambert15}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCube12_forMayaAOlambert15_0.geometry}
        material={materials.forMayaAOlambert15}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCube15_forMayaAOlambert15_0.geometry}
        material={materials.forMayaAOlambert15}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCube11_forMayaAOlambert15_0.geometry}
        material={materials.forMayaAOlambert15}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCube13_forMayaAOlambert15_0.geometry}
        material={materials.forMayaAOlambert15}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpSphere7_Chrome_0.geometry}
        material={materials.Chrome}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface266_forMayaAOblinn9_0.geometry}
        material={materials.forMayaAOblinn9}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface221_Chrome_0.geometry}
        material={materials.Chrome}
        scale={0.01}
      />
      {/* mirror */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface318_mafina2hdrilambert9_0.geometry}
        material={materials.mafina2hdrilambert9}
        scale={0.01}
      />
      {/* wheels */}
<mesh
  castShadow
  receiveShadow
  geometry={nodes.forMayaAOpolySurface320_forMayaAOphong2_0.geometry}
  material={materials.forMayaAOphong2}
  scale={0.01}
/>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface324_Chrome_0.geometry}
        material={materials.Chrome}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpolySurface326_forMayaAOlambert16_0.geometry}
        material={materials.forMayaAOlambert16}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCylinder11_forMayaAOblinn6_0.geometry}
        material={materials.forMayaAOblinn6}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.forMayaAOpCylinder12_forMayaAOlambert15_0.geometry}
        material={materials.forMayaAOlambert15}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere2_forMayaAOphong5_0.geometry}
        material={materials.forMayaAOphong5}
        position={[0.023, 0.081, 0.028]}
        rotation={[1.785, 1.553, Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere3_forMayaAOphong5_0.geometry}
        material={materials.forMayaAOphong5}
        position={[0.023, 0.077, 0.027]}
        rotation={[1.785, 1.553, Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere4_forMayaAOphong5_0.geometry}
        material={materials.forMayaAOphong5}
        position={[0.033, 0.072, 0.026]}
        rotation={[1.785, 0.563, Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere5_forMayaAOphong5_0.geometry}
        material={materials.forMayaAOphong5}
        position={[0.034, 0.059, 0.023]}
        rotation={[1.785, -0.478, Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere6_forMayaAOphong5_0.geometry}
        material={materials.forMayaAOphong5}
        position={[0.038, 0.073, 0.026]}
        rotation={[1.785, 0.495, Math.PI]}
        scale={0.001}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pSphere7_forMayaAOphong5_0.geometry}
        material={materials.forMayaAOphong5}
        position={[0.037, 0.056, 0.022]}
        rotation={[1.785, -0.535, Math.PI]}
        scale={0.001}
      />
    </group>
  )
}

export default Car