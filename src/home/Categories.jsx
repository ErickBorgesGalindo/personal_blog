import React from 'react';
import { Link } from 'react-router-dom';
import { CategoriesCard } from '../components/CategoriesCard';
import '../styles/categories.css';

const categories = [
    {
        categoryName: 'Lifestyle',
        articlesCount: 6,
        image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        categoryName: 'Courses',
        articlesCount: 7,
        image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        categoryName: 'TechNews',
        articlesCount: 3,
        image: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
];

export function Categories() {
    return (
        <div className="cat-container">
            <h4>
                Categories
            </h4>
            {categories.map((category) => (
                <Link key={category.categoryName} to={`category/${category.categoryName}`}>
                    <CategoriesCard
                        image={category.image}
                        categoryName={category.categoryName}
                        articlesCount={category.articlesCount}
                    />
                </Link>
            ))}
        </div>
    );
}