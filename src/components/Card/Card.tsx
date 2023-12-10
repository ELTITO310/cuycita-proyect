import VideoThumbnail from 'react-video-thumbnail'; 
import {useState, forwardRef, Ref, MouseEventHandler, memo} from 'react'
import './Card.scss'

const Card = memo(forwardRef(({title, src, description, onClick}: {
    title: string,
    src: string,
    description: string,
    onClick: MouseEventHandler<HTMLDivElement>
}, ref: Ref<HTMLDivElement>) => {

    const [thumbnail, setThumbnail] = useState('')

    return ( <div className="card" 
        ref={ref}
        onClick={onClick}>
            <div className="background" style={{
                backgroundImage: `url(${thumbnail})`
            }}></div>
            <div className="content">
                <h1>{title}</h1>
                <p>{description.length > 150 ? description.slice(0, 150).trim() + '...' : description}</p>
            </div>
            <VideoThumbnail
                videoUrl={src}
                thumbnailHandler={(thumbnail: string) => setThumbnail(thumbnail)}
            />

    </div> );
}))
 
export default Card;