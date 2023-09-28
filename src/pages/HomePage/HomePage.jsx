import './Homepage.css';
import video from '../../assets/videos/homeVideo.mp4';

function HomePage() {
    return (
        <div className='absolute h-full w-full animate-fade-left animate-delay-0 animate-duration-1000'>
            <video className='h-full w-full object-cover' loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}
export default HomePage