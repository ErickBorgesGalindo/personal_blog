// import { CiTimer, CiChat1 } from "react-icons/ci";
// import { FaThreads, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
// import '../styles/mainarticle.css';

// export function MainArticle() {
//     return (
//         <div className='hs-main'>
//             <div className="hs-main-article">
//                 <div className='hs-main-article-thumb'>
//                     <img alt='main'
//                         src='https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg' />
//                 </div>
//                 <div className='hs-main-article-category'>
//                     <span>LifeStyle</span>
//                 </div>
//                 <div className='hs-main-article-text'>
//                     <div className='hs-main-article-title'>
//                         <h3>The Greatest Thing in The World is to Know How to Belong to Oneself</h3>
//                     </div>
//                     <div className='hs-main-article-info'>
//                         <span>By ErickBorges</span>
//                         <span><i><CiTimer /></i> October 05, 1999</span>
//                         <span><i><CiChat1 /></i> 4</span>
//                     </div>
//                     <div className='hs-main-article-resume'>
//                         <p>Met to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of extra space, including wider seats as standard, no control boxes under seats for the in-flight entertainment system, which means it’s all open for you to stretch your legs. The planes will offer improved built-in broadband connectivity that’ll allow passengers to use their phones and tablets.</p>
//                     </div>
//                 </div>
//                 <div className='hs-main-article-button'>
//                     <button>Read More</button>
//                 </div>
//                 <div className='hs-main-article-social'>
//                     <div className='hs-main-article-socialmedia'>
//                         <a href="https://www.threads.net/@alecs_borges" target="_blank">
//                             <i><FaThreads /></i>
//                         </a>
//                         <a href="https://twitter.com/ErickBGalindo" target="_blank">
//                             <i><FaXTwitter /></i>
//                         </a>
//                         <a href="https://www.linkedin.com/in/erick-borges-galindo/" target="_blank">
//                             <i><FaLinkedinIn /></i>
//                         </a>
//                     </div>
//                     <div className='hs-main-article-comentaries'>
//                         <a href=""><i><CiChat1 /></i></a>
//                     </div>
//                     <div className="hs-main-article-hashtags">
//                         <a href="" target="_blank">#Fashion</a>
//                         <a href="" target="_blank">#Health</a>
//                         <a href="" target="_blank">#Lifestyle</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { CiTimer, CiChat1 } from "react-icons/ci";
import { FaThreads, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import '../styles/mainarticle.css';

export function MainArticle({image, category, title, writer, date, coments, resume}) {
    return (
        <div className='hs-main'>
            <div className="hs-main-article">
                <div className='hs-main-article-thumb'>
                    <img alt='main'
                        src={'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg'} />
                </div>
                <div className='hs-main-article-category'>
                    <span>{category}</span>
                </div>
                <div className='hs-main-article-text'>
                    <div className='hs-main-article-title'>
                        <h3>{title}</h3>
                    </div>
                    <div className='hs-main-article-info'>
                        <span>By {writer}</span>
                        <span><i><CiTimer /></i> {date}</span>
                        <span><i><CiChat1 /></i> {coments}</span>
                    </div>
                    <div className='hs-main-article-resume'>
                        <p>{resume}</p>
                    </div>
                </div>
                <div className='hs-main-article-button'>
                    <button>Read More</button>
                </div>
                <div className='hs-main-article-social'>
                    <div className='hs-main-article-socialmedia'>
                        <a href="https://www.threads.net/@alecs_borges" target="_blank">
                            <i><FaThreads /></i>
                        </a>
                        <a href="https://twitter.com/ErickBGalindo" target="_blank">
                            <i><FaXTwitter /></i>
                        </a>
                        <a href="https://www.linkedin.com/in/erick-borges-galindo/" target="_blank">
                            <i><FaLinkedinIn /></i>
                        </a>
                    </div>
                    <div className='hs-main-article-comentaries'>
                        <a href=""><i><CiChat1 /></i></a>
                    </div>
                    <div className="hs-main-article-hashtags">
                        <a href="" target="_blank">#Fashion</a>
                        <a href="" target="_blank">#Health</a>
                        <a href="" target="_blank">#Lifestyle</a>
                    </div>
                </div>
            </div>
        </div>
    )
}