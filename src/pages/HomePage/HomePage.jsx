import './Homepage.css';
import video from '../../assets/videos/homeVideo.mp4';

function HomePage() {
    return (
        <div className='h-full w-full'>
            <video className='h-full w-full object-cover' loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}
export default HomePage