import { ReactNode, useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import {useInView} from 'react-intersection-observer'
// import {useInView} from 'framer-motion'

interface Props {
    id: string,
    children: ReactNode,
    className: string
}

const Section = ({id, children, className = ''}: Props) => {

    const navigate = useNavigate()
    // const ref = useRef(null)
    const {ref, inView} = useInView({
        threshold: 0.2
    })

    useEffect(() => {
        if(inView) {
            console.log(id)
            navigate(`#${id}`, {replace: true})
        }
    }, [inView, id, navigate])

    return ( <section id={id} ref={ref} className={className}>
        {children}
    </section> );
}
 
export default Section;