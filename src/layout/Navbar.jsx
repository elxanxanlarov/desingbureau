import { Link, useLocation } from "react-router-dom";
import burgerIcon from "../assets/images/icons/burger-menu.png"
import logo from "../assets/images/logo.svg";
import logoBlack from "../assets/images/logo-black.svg";
import closeIcon from "../assets/images/icons/nav-close.png";
export default function Navbar({ isSideBarOpen, setIsSideBarOpen }) {
    const location = useLocation();
    const isServicesPage = location.pathname === "/services";
    
    return (
        <>
            <div className={`flex justify-between items-center px-16 py-8 bg-transparent ${isServicesPage ? 'relative' : 'absolute'} w-full z-50`}>
                <div className={`flex items-center gap-8 ${isServicesPage ? 'text-black' : 'text-white'}`}>
                    <Link className="font-semibold" to={"projects"}>PROJECTS</Link>
                    <Link className="font-semibold" to={"contact"}>CONTACT</Link>
                </div>
                <div className={`${isServicesPage ? 'text-black' : 'text-white'} flex gap-1 items-center `}>
                    <Link to={"/"} >
                        <img src={isServicesPage ? logoBlack : logo} className="w-full" alt="logo" />
                    </Link>
                </div>
                <button onClick={() => setIsSideBarOpen(!isSideBarOpen)} className={`cursor-pointer w-8 h-8 ${isServicesPage ? 'invert' : ''}`}>
                    {isSideBarOpen ? <img src={closeIcon} alt="closeIcon" /> : <img src={burgerIcon} alt="burgerIcon" />}
                </button>
            </div>
        </>
    )
}