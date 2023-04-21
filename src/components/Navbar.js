import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, Fabars, FaTimes } from "react-icons/fa";
import Logo from '../assets/Gym-icon.png';
import "../styles/Navbar.css"

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <div className="logo">
                <img src={Logo} alt="Logo"/> 
            </div>
            <nav ref={navRef}>
                <Link to='/'>Home</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar