import { FaThreads, FaXTwitter, FaLinkedinIn, FaReact } from "react-icons/fa6";
import '../styles/footer.css'

export function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-sections">
                    <a href="">Home</a>
                    <a href="">Lifestyle</a>
                    <a href="">TechNews</a>
                    <a href="">Courses</a>
                    <a href="">Contact Us</a>
                </div>
                <div className="footer-socials">
                    <a href='https://www.threads.net/@alecs_borges' target="_blank">
                        <i><FaThreads /></i>
                    </a>
                    <a href='https://twitter.com/ErickBGalindo' target="_blank">
                        <i><FaXTwitter /></i>
                    </a>
                    <a href='https://www.linkedin.com/in/erick-borges-galindo/' target="_blank">
                        <i><FaLinkedinIn /></i>
                    </a>
                </div>
            </div>
            <div className="footer-rights">
                <span>Erick Borges © 2024. Made with React </span>
                <i> <FaReact /> </i> 
                <span> all rights reserved.</span>
            </div>
        </footer>
    );
}