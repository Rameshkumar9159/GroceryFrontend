import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem'; // Import the correct component
import { itemContext } from '../ItemContext';

const ProductList = () => {
  const { products } = useContext(itemContext);
  const [sortedProducts, setSortedProducts] = useState([...products]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [selectedType, setSelectedType] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    setSortedProducts([...products]);
  }, [products]);

  const handleSortByPrice = () => {
    const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
    setSortedProducts(sorted);
  };

  const handleFilterByPriceRange = () => {
    const filtered = products.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    setSortedProducts(filtered);
  };

  const handleFilterByType = () => {
    if (selectedType === 'all') {
      setSortedProducts([...products]);
    } else {
      const filtered = products.filter((product) => product.type === selectedType);
      setSortedProducts(filtered);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout-success');
  };

  return (
    <div className="prdt-list">
      <h2>Product List</h2>
      <div className="filter-btn">
        <button onClick={handleSortByPrice}>Sort by Price</button>
        <label>
          Min Price:
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </label>
        <label>
          Max Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </label>
        <button onClick={handleFilterByPriceRange}>Filter by Price Range</button>
        <label>
          Filter by Type:
          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
            <option value="all">All</option>
            <option value="Grains">Grains</option>
            <option value="Vegetable">Vegetable</option>
          </select>
        </label>
        <button onClick={handleFilterByType}>Filter by Type</button>
      </div>

      <ul className="item-card">
        {/* Render each product using ProductItem component */}
        {sortedProducts.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </ul>
      <div className='buy-now-btn' onClick={handleCheckout}>Proceed to Checkout
      </div>
    </div>
  );
};

export default ProductList;
