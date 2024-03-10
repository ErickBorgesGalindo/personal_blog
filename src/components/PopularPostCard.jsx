import '../styles/popularpost.css';
import { CiTimer} from "react-icons/ci";
import { IoMdEye } from "react-icons/io";

export function PopularPostCard({image, title, date, views}){
    return(
        <div className="pp-card-container">
            <div className="pp-card-image">
                <img alt='popular post' src={image}/>
            </div>
            <div className="pp-card-text">
                <div className="pp-card-title">
                    <h3>{title}</h3>
                </div>
                <div className="pp-card-info">
                    <span><i><CiTimer /></i> {date}</span>
                    <span><i><IoMdEye /></i> {views} views</span>
                </div>
            </div>
        </div>
    );
}