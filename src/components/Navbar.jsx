import { useRef } from "react";
import { IoIosClose, IoIosMenu, IoIosSearch} from "react-icons/io";
import '../styles/navbar.css'

export function Navbar(){
    const NavRef = useRef();

    const ShowNavBar = ()=>{
        NavRef.current.classList.toggle('responsive_nav');
    }
  return (
    <header>
        <a href="/#"><h3>Alecs</h3></a>
        <nav ref={NavRef}>
            <a href="/#">Home</a>
            <a href="/category/Courses">Courses</a>
            <a href="/#">About Me</a>
            <a href="/#">Chetos</a>
            <button>
                <i><IoIosSearch /></i>
            </button>
            <button className={'nav-btn nav-close-btn'} onClick={ShowNavBar}>
                <i><IoIosClose /></i>
            </button>
        </nav>
        
        <button className={'nav-btn '} onClick={ShowNavBar}>
            <i><IoIosMenu /></i>
        </button>
    </header>
  )
}