import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="fixed flex w-full z-50 items-center justify-between flex-wrap bg-[#b13329] top-0 p-3 animate-fade">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link className="text-teal-200 hover:text-white" to="/">
                    <span className="font-semibold text-[30px] tracking-tight">Restaurant</span>
                </Link>
            </div>
        </nav>
    )
}
export default Navbar;