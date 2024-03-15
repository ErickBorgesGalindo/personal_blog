import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CategoriesCard } from '../components/CategoriesCard';
import '../styles/categories.css';

// const categories = [
//     {
//         categoryName: 'Lifestyle',
//         articlesCount: 6,
//         image: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     },
//     {
//         categoryName: 'Courses',
//         articlesCount: 7,
//         image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     },
//     {
//         categoryName: 'TechNews',
//         articlesCount: 3,
//         image: 'https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//     },
// ];

export function Categories() {

    // -------- Extraer las categorias --------
    const [categories, setCategories] = useState([]);

    const loadCategories = async() => {
        const response = await fetch('http://localhost:3000/categories');
        const data = await response.json();
        setCategories(data);
    }

    useEffect(() => {
        loadCategories();
    },[]);


    return (
        <div className="cat-container">
            <h4>
                Categories
            </h4>
            {categories.map((category) => (
                <Link key={category.id_cat} to={`/category/${category.nombre}`}>
                    <CategoriesCard
                        image={category.image}
                        categoryName={category.nombre}
                        articlesCount={category.articles}
                    />
                </Link>
            ))}
        </div>
    );
}