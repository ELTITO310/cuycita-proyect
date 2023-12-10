import {motion} from 'framer-motion'
import { ReactNode } from 'react';
import './backdrop.scss'

const BackDrop = ({children}: {
    children: ReactNode
}) => {
    return ( <motion.div 
    className='backdrop'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        {children}
    </motion.div> );
}
 
export default BackDrop;