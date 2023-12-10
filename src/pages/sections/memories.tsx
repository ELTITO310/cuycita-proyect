import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import ReactPlayer from 'react-player/file'
import {memories} from '../../utils/texts'
import {useState, memo} from 'react';
import { IoClose } from "react-icons/io5";1
import {motion, AnimatePresence} from 'framer-motion'
import Section from '../../components/Section'
import './memories.scss'

const Memories = () => {

    const [selected, setSelected] = useState<string | null>(null)
    const CardMotion = memo(motion(Card))

    return ( <Section id='memories' className="memories">
        <div className="cards">
            {memories.map((memorie, i) => {
                return <CardMotion 
                title={memorie.title} 
                src={memorie.src} 
                description={memorie.description} 
                key={i}
                onClick={() => setSelected(String(i + 1))}
                layoutId={`card-${String(i)}`}
                whileHover={{
                    y: -15,
                    boxShadow: '0rem 1rem 5rem rgba(255, 255, 255, .2)'
                }}
                transition={{
                    duration: 0.05,
                    type: 'spring',
                    stiffness: 400
                }} />
            })}
            <AnimatePresence initial={false} mode='wait' onExitComplete={() => null} >
                {selected &&
                    <Modal selected={`card-${Number(selected)-1}`}>
                        <div className='texts'>
                            <motion.h1>{memories[Number(selected) -1].title}</motion.h1>
                            <motion.p>{memories[Number(selected) -1].description}</motion.p>
                        </div>
                        <ReactPlayer 
                        className="video"
                        url={memories[Number(selected) -1].src}
                        width={"auto"}
                        height={"auto"}
                        style={{
                            transform: 'scale(0.7)'
                        }}
                        controls />
                        <button onClick={() => setSelected(null)}><IoClose /></button>
                    </Modal>
            }
            </AnimatePresence>
        </div>
    </Section> );
}
 
export default Memories;