import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation,
} from '../config/motion';

const Home = () => {
    const snap = useSnapshot(state);

  return (
   <AnimatePresence>
    {
        snap.intro && (
            <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation("down")}>
                    <img
                    src='./threejs.png'
                    alt="logo"
                    className="w-8 h-8 object-contain"          
                    />
                </motion.header>
            <motion.div className="home-content" {...headContainerAnimation}>
                
                <motion.div {...headTextAnimation}>
                    <h1 className="head-text">
                        LET'S <br className="x1:block hidden" /> DO IT 
                    </h1>  
                </motion.div>

                <motion.div {...headContentAnimation}>
                
                    <p className="max-w-md font-normal text-gray-600 text-base">
                        Create with us your new uniquely customized shirt just for you. Try Our 3D customization tool.<strong>Lets see your creative imagination in use!!!</strong> {" "} Define You.
                    </p>
                    <CustomButton 
                        type="filled"
                        title="Customize Here"
                        handleClick={() => state.intro =false}
                        customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                    />
                </motion.div>
            </motion.div>

            </motion.section>
        )
    }
    </AnimatePresence>
  )
}

export default Home