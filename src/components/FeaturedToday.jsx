import { CiTimer } from "react-icons/ci";
import '../styles/featuredtoday.css';

export function FeaturedToday({category, title, date}) {
    return (
        <div className='ft-container'>
            <h4>Featured Today</h4>
            <div className='ft-image-container'>
                <img alt='article image' src='https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg' />
            </div>
            <div className='ft-category'>
                <a>{category}</a>
            </div>
            <div className='ft-title'>
                <h3>{title}</h3>
            </div>
            <div className="ft-time">
                <span>
                    <i><CiTimer /></i>{date}
                </span>
            </div>
            <div className='tf-button'>
                <button>Read More</button>
            </div>
        </div>
    );
}