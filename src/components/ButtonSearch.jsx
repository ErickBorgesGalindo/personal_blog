import { AiOutlineRight } from "react-icons/ai";
import '../styles/buttonsearch.css'

export function ButtonSearch(){
    return(
        <div className="bs-container">
            <a>See more articles 
                <i><AiOutlineRight/></i>
            </a>
        </div>
    );
}