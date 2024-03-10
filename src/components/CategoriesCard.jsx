import '../styles/categories.css'

export function CategoriesCard({image, categoryName, articlesCount}) {
    return (
        <div className="cat-image-container">
            <div className="cat-image">
                <img alt='category image' src={image} />
            </div>
            <div className="cat-category-name">
                <span>{categoryName}</span>
            </div>
            <div className="cat-category-count">
                <span>{articlesCount} Articles</span>
            </div>
        </div>
    );
}