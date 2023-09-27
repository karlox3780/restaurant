import './Homepage.css';
import video from '../../assets/videos/homeVideo.mp4';

function HomePage() {
    return (
        <div className='h-full w-full animate-fade-left animate-delay-[1000ms] animate-duration-2000'>
            <video className='h-full w-full object-cover' loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}
export default HomePage