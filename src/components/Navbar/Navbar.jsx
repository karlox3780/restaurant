import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className="fixed flex flex-col h-full w-[200px] z-50 content-center items-center justify-normal flex-wrap bg-[#24251D] top-0 p-[10px] animate-fade-right animate-delay-0 animate-duration-2000 max-lg:w-full max-lg:h-[60px] max-lg:justify-between max-lg:flex-row">
            <div className="flex justify-center flex-shrink-0 text-white animate-fade-down animate-delay-[1000ms] animate-duration-1000">
                <Link className="text-teal-200 hover:text-white" to="/">
                    <span className="font-semibold text-[20px] tracking-tight">Restaurant</span>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => { setIsNavExpanded(!isNavExpanded); }}
                    className="flex items-center px-[10px] py-[10px] border text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div id="menu" className={`${isNavExpanded ? 'block' : 'hidden'} w-full flex-grow lg:hidden`}>
                <div className="text-sm lg:flex-grow" >
                    <Link to="/search" className="block text-[20px] lg:inline-block lg:mt-0 mt-[10px] text-teal-200 hover:text-white mr-4">
                        Búsqueda
                    </Link>
                </div>
            </div>
            <div className="absolute flex flex-col bottom-[10px] flex-shrink-0 text-white animate-fade-down animate-delay-[1000ms] animate-duration-1000 max-lg:hidden">
                <Link className="text-teal-200 hover:text-white" to="/">
                    <span className="font-semibold text-[16px] tracking-tight">Inicio</span>
                </Link>
                <Link className="text-teal-200 hover:text-white mt-[10px]" to="/">
                    <span className="font-semibold text-[16px] tracking-tight">Carta</span>
                </Link>
                <Link className="text-teal-200 hover:text-white mt-[10px]" to="/menus">
                    <span className="font-semibold text-[16px] tracking-tight">Menús</span>
                </Link>
                <Link className="text-teal-200 hover:text-white mt-[10px]" to="/winecellar">
                    <span className="font-semibold text-[16px] tracking-tight">Bodega</span>
                </Link>
                <Link className="text-teal-200 hover:text-white mt-[10px]" to="/">
                    <span className="font-semibold text-[16px] tracking-tight">Reservas y contactos</span>
                </Link>
                <Link className="text-teal-200 hover:text-white mt-[10px]" to="/about">
                    <span className="font-semibold text-[16px] tracking-tight">Nosotros</span>
                </Link>
            </div>
        </nav >
    )
}
export default Navbar;