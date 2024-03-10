import { CiMail } from "react-icons/ci";
import { FaThreads, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import '../styles/aboutme.css';

export function AboutMe(){
    return(
        <div className='am-container'>
            <h4>
                ABOUT ME
            </h4>
            <div className='am-image-container'>
                <img alt='this is me' src='../src/assets/images/me.jpg'/>
            </div>
            <h4>Erick Borges</h4>
            <div className='am-about-author'>
                <span>
                    Our talented team of WordPress Developers and Designers collaborates to create visually stunning and user-friendly websites
                </span>
            </div>
            <div className='am-social-media'>
                <a href='mailto:erick.borges@outlook.es'><i><CiMail /></i></a>
                <a href='https://www.threads.net/@alecs_borges'><i><FaThreads /></i></a>
                <a href='https://www.linkedin.com/in/erick-borges-galindo/'><i><FaLinkedinIn /></i></a>
                <a href='https://twitter.com/ErickBGalindo'><i><FaXTwitter /></i></a>
            </div>
        </div>

    );
}