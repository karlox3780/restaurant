import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="fixed flex flex-col h-full w-[200px] z-50 items-center justify-normal flex-wrap bg-[#24251D] top-0 p-[10px] animate-fade-right animate-delay-0 animate-duration-2000">
            <div className="flex justify-center flex-shrink-0 text-white animate-fade-down animate-delay-[1000ms] animate-duration-1000">
                <Link className="text-teal-200 hover:text-white" to="/">
                    <span className="font-semibold text-[20px] tracking-tight">Restaurant</span>
                </Link>
            </div>
            <div className="absolute flex flex-col bottom-[10px] flex-shrink-0 text-white animate-fade-down animate-delay-[1000ms] animate-duration-1000">
                <Link className="text-teal-200 hover:text-white" to="/">
                    <span className="font-semibold text-[16px] tracking-tight">Inicio</span>
                </Link>
                <Link className="text-teal-200 hover:text-white mt-[10px]" to="/">
                    <span className="font-semibold text-[16px] tracking-tight">Carta</span>
                </Link>
                <Link className="text-teal-200 hover:text-white mt-[10px]" to="/">
                    <span className="font-semibold text-[16px] tracking-tight">Menus</span>
                </Link>
                <Link className="text-teal-200 hover:text-white mt-[10px]" to="/">
                    <span className="font-semibold text-[16px] tracking-tight">Bodega</span>
                </Link>
                <Link className="text-teal-200 hover:text-white mt-[10px]" to="/">
                    <span className="font-semibold text-[16px] tracking-tight">Reservas y contactos</span>
                </Link>
                <Link className="text-teal-200 hover:text-white mt-[10px]" to="/about">
                    <span className="font-semibold text-[16px] tracking-tight">Nosotros</span>
                </Link>
            </div>
        </nav>
    )
}
export default Navbar;