import { Link } from 'react-router-dom';
import './CategorySection.css';
import { categories } from '../data/products';

const CategorySection = () => {
  return (
    <section className="category-section" id="categories">
      <h2 className="category-title heading-line" id='shop'>Shop By Categories</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <Link to={`/category/${cat.name}`} key={cat.id} className="category-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="category-image-wrapper">
              <img src={cat.img} alt={cat.name} />
            </div>
            <p className="category-name">{cat.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
