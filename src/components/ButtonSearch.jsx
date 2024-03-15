import { AiOutlineRight } from "react-icons/ai";
import '../styles/buttonsearch.css'

export function ButtonSearch({onClick}){
    return(
        <button className="bs-container" onClick={onClick}>
            <a>See more articles 
                <i><AiOutlineRight/></i>
            </a>
        </button>
    );
}