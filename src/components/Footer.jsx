import { FaThreads, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import '../styles/footer.css'

export function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-info">
                    <h4>AlecsBlog</h4>
                    <p>Mantente al día con las últimas tendencias tecnológicas, aprende nuevas habilidades de programación y descubre un estilo de vida digital que te apasione.</p>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Si quieres colaborar de escribiendo o solicitando un tema, contáctame</p>
                    <p>erick.borges@outlook.es</p>
                    <p>+782 122 22 22</p>
                </div>
                <div className="footer-social-media">
                    <h4>Give me a Follow</h4>
                    <div className="footer-social-media-icons">
                        <a href='https://www.threads.net/@alecs_borges'><i><FaThreads /></i></a>
                        <a href='https://www.linkedin.com/in/erick-borges-galindo/'><i><FaLinkedinIn /></i></a>
                        <a href='https://twitter.com/ErickBGalindo'><i><FaXTwitter /></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}