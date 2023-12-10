import './Nav.scss'
import { FaHeart } from "react-icons/fa6";
import { GiLoveLetter } from "react-icons/gi";
import { CiPause1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { RiMemoriesFill } from "react-icons/ri";
import { useGlobalAudioPlayer } from 'react-use-audio-player';
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import { motion } from 'framer-motion'

const Nav = () => {

    const { hash } = useLocation()
    const {playing, togglePlayPause} = useGlobalAudioPlayer()

    useEffect(() => {
        console.log(hash)
    })

    const variants = {
        focus: i => ({
            scale: 1.5,
            color: i,
        }),
        hidden: {
            scale: 1,
            color: '#ffffff'
        },
    }

    const IconHeart = motion(FaHeart)
    const IconMemories = motion(RiMemoriesFill)
    const IconLetter = motion(GiLoveLetter)

    return ( <nav className='nav'>
        <button className='control' onClick={() => {
                togglePlayPause()
        }}>{playing ? <CiPause1 /> : <CiPlay1 />}</button>
        <ul>
            <li>
                <motion.a 
                    href={'#heart'}>
                    <IconHeart 
                    transition={{ ease: "easeOut", duration: 5 }}
                    variants={variants}
                    custom={'#FC0E0E'}
                    initial={hash === '#heart' ? 'focus' : 'hidden'}
                    animate={hash === '#heart' ? 'focus' : 'hidden'}/>
                </motion.a>
            </li>
            <li>
                <motion.a href={'#letter'}>
                    <IconLetter
                     transition={{ ease: "easeOut", duration: 5 }}
                     variants={variants}
                     custom={'#E65FFF'}
                     initial={hash === '#letter' ? 'focus' : 'hidden'}
                     animate={hash === '#letter' ? 'focus' : 'hidden'}/>     
                </motion.a>
            </li>
            <li>
                <motion.a href={'#memories'}>
                    <IconMemories 
                    transition={{ ease: "easeOut", duration: 5 }}
                    variants={variants}
                    custom={'#D4FC24'}
                    initial={hash === '#memories' ? 'focus' : 'hidden'}
                    animate={hash === '#memories' ? 'focus' : 'hidden'}/>      
                </motion.a>
            </li>
        </ul>
    </nav> );
}
 
export default Nav;