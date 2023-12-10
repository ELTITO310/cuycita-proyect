import BackDrop from '../BackDrop/BackDrop'
import {motion} from 'framer-motion'
import './modal.scss'
import { ReactNode } from 'react'

const Modal = ({selected, children}: {
    selected: string,
    children: ReactNode
}) => {
    return ( <BackDrop>
        <motion.div 
        className='modal'
        layoutId={selected}>
            {children}
        </motion.div>
    </BackDrop> );
}
 
export default Modal;