import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import {
headContainerAnimation,
headContentAnimation,
headTextAnimation,
slideAnimation
} from '../config/motion';
const Home = () => {
  const snap=useSnapshot(state);
  return (
    <div className='text-gray-50'>
      <AnimatePresence>
        {snap.intro &&(
          <motion.section className='home'{...slideAnimation('left')}>
            <motion.header {...slideAnimation("down")}>
              <img
                src='./threejs.png'
                alt='logo'
                className='w-8 h-8 object-contain'/>
            </motion.header>
            <motion.div className='home-content' {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <hi className="text-gray-50 head-text">
                  HUE <br className='xl:block hidden'/>YOUR RIDE.
                </hi>
              </motion.div>
              <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                <p className='max-w-md font-normal text-gray-500 text-base'>
                From classic elegance to bold brilliance,<strong>Paint your Ride</strong>{" "} find the perfect shade to make your car truly yours!
                </p>
                <CustomButton type="filled" title="Customize it" handleClick={()=>state.intro=false} customStyles="w-fit px-4 py-2.5 font-bold text-sm"/>
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Home
