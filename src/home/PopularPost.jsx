import { PopularPostCard } from '../components/PopularPostCard';
import '../styles/popularpost.css';

const popular = [
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
        view: 124
    },
    {
        image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'The Greatest Thing in The World is to Know How to Belong to Oneself',
        date: 'October 5, 1999',
        view: 124
    },
    {
        image: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'The Greatest Thing in The World is to Know How to Belong to Oneself',
        date: 'October 5, 1999',
        view: 124
    },

];

export function PopularPost() {
    return (
        <div className="pp-container">
            <h4>Popular Posts</h4>
            <PopularPostCard
                image={popular[0].image}
                title={popular[0].title}
                date={popular[0].date}
                views={popular[0].view} />
            <PopularPostCard
                image={popular[1].image}
                title={popular[1].title}
                date={popular[1].date}
                views={popular[1].view} />
            <PopularPostCard
                image={popular[2].image}
                title={popular[2].title}
                date={popular[2].date}
                views={popular[2].view} />
            <PopularPostCard
                image={popular[3].image}
                title={popular[3].title}
                date={popular[3].date}
                views={popular[3].view} />

        </div>
    );
}