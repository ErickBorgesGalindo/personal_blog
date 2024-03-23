import { PopularPostCard } from '../components/PopularPostCard';
import { Link } from 'react-router-dom';
import '../styles/popularpost.css';

const populars = [
    {
        image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'The Greatest Thing in The World is to Know How to Belong to Oneself',
        date: 'October 5, 1999',
        view: 124
    },
    {
        image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'The Greatest Thing in The World is to Know How to Belong to Oneself',
        date: 'October 5, 1999',
        view: 125
    },
    {
        image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'The Greatest Thing in The World is to Know How to Belong to Oneself',
        date: 'October 5, 1999',
        view: 126
    },
    {
        image: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'The Greatest Thing in The World is to Know How to Belong to Oneself',
        date: 'October 5, 1999',
        view: 127
    },

];

export function PopularPost() {
    return (
        <div className="pp-container">
            <h4>Popular Posts</h4>
            {populars.map((popular) => (
                <Link key={popular.view}>
                    <PopularPostCard
                        image={popular.image}
                        title={popular.title}
                        date={popular.date}
                        views={popular.view} />
                </Link>

            ))}
        </div>
    );
}