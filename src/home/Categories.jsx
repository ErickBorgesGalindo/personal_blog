import '../styles/categories.css';
import { CategoriesCard } from '../components/CategoriesCard';

const categories=[
    {
        categoryName: 'Lifestyle',
        articlesCount: 6,
        image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        categoryName: 'Course',
        articlesCount: 7,
        image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        categoryName: 'TechNews',
        articlesCount: 3,
        image: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
];

export function Categories(){
    return(
        <div className="cat-container">
            <h4>
                Categories
            </h4>
            <CategoriesCard 
                image={categories[0].image}
                categoryName={categories[0].categoryName}
                articlesCount={categories[0].articlesCount}/>
            <CategoriesCard
                image={categories[1].image}
                categoryName={categories[1].categoryName}
                articlesCount={categories[1].articlesCount}/>
            <CategoriesCard
                image={categories[2].image}
                categoryName={categories[2].categoryName}
                articlesCount={categories[2].articlesCount}/>
        </div>
    );
}