import {Canvas} from '@react-three/fiber'
import {Environment} from '@react-three/drei'
import Car from './Car';
import Backdrop from './Backdrop'
import CameraRig from './CameraRig'
import  {Center} from '@react-three/drei';

const CanvasModel = () => {
  return (
    <div className='h-full bg-slate-300'>
      <Canvas className='w-full max-w-full h-full transition-all ease-in' shadows camera={{position:[0,0,0], fov:6}} gl={{preserveDrawingBuffer: true}}>
        <ambientLight intensity={0.5}/>
        <Environment preset='city'/>
        <CameraRig>
          <Backdrop/> 
          <Center>
            <Car/>
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  )
}

export default CanvasModel
