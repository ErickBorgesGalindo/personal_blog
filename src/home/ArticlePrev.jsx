import { CiTimer, CiChat1 } from "react-icons/ci";
import '../styles/articleprev.css'

export function ArticlePrev({image, category, title, writer, date, coments, resume}){
    return(
        <div className="ap-container">
            <div className="ap-image">
                <img src={image}/>
            </div>
            <div className="ap-text">
                <div className="ap-category">
                    <span>---- {category}</span>
                </div>
                <div className="ap-title">
                    <h3>{title}</h3>
                </div>
                <div className="ap-info">
                    <span>By {writer}</span>
                    <span><i><CiTimer /></i>{date}</span>
                    <span><i><CiChat1 /></i> {coments}</span>
                </div>
                <div className="ap-resume">
                    <span>{resume}</span>
                </div>
            </div>
        </div>
    );    
}