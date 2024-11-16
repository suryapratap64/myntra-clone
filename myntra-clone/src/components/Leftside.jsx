import React, { useState } from 'react'

const Leftside = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [discountRange,setDiscountRange]=useState('');
  
    // Sample data for filters
    const colors = ['Red', 'Blue', 'Green', 'Black', 'White'];
    const categories = ['T-shirts', 'Jeans', 'Shoes', 'Jackets'];
    const brands = ['Nike', 'Adidas', 'Puma', 'Reebok'];
    const ranges=['']
  
    // Handlers for filter selection
    const handleColorChange = (color) => {
      setSelectedColor(color);
    };
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    const handleBrandChange = (brand) => {
      setSelectedBrand(brand);
    };
  
    // Reset filters
    const resetFilters = () => {
      setSelectedColor('');
      setSelectedCategory('');
      setSelectedBrand('');
    };
    const [minPrice, setMinPrice] = useState(100);
    const [maxPrice, setMaxPrice] = useState(600);
    const [leftPosition, setLeftPosition] = useState(0);
    const [rightPosition, setRightPosition] = useState(200);

    const handleLeftThumbDrag = (event) => {
        let newLeft = event.clientX - event.target.getBoundingClientRect().left;
        newLeft = Math.max(0, Math.min(newLeft, rightPosition - 10));
        setLeftPosition(newLeft);
        setMinPrice(Math.floor(newLeft * 3)); // Scale factor for price
    };

    const handleRightThumbDrag = (event) => {
        let newRight = event.clientX - event.target.getBoundingClientRect().left;
        newRight = Math.max(leftPosition + 10, Math.min(newRight, 200));
        setRightPosition(newRight);
        setMaxPrice(Math.floor(newRight * 3)); // Scale factor for price
    };
  
    return (
      <div className="filter-sidebar">
       <div className="verticalFilters-filters">
            <span className="verticalFilters-header">Price</span>
            <div className="slider-sliderContainer">
                <div className="slider-root" id="root">
                    <div id="rootRail" className="slider-rootRail">
                        <div id="rootRailBar" className="slider-rootRailBar"></div>
                        <div
                            id="rootRailRange"
                            className="slider-rootRailRange"
                            style={{ left: `${leftPosition}px`, right: `${200 - rightPosition}px` }}
                        ></div>
                        <div
                            role="button"
                            tabIndex="0"
                            id="rootRailThumbLeft"
                            className="slider-rootRailThumbLeft"
                            style={{ left: `${leftPosition}px` }}
                            onMouseDown={(e) => e.preventDefault()}
                            onMouseMove={handleLeftThumbDrag}
                        >
                            <div className="slider-thumbDot"></div>
                        </div>
                        <div
                            role="button"
                            tabIndex="0"
                            id="rootRailThumbRight"
                            className="slider-rootRailThumbRight"
                            style={{ left: `${rightPosition}px` }}
                            onMouseDown={(e) => e.preventDefault()}
                            onMouseMove={handleRightThumbDrag}
                        >
                            <div className="slider-thumbDot"></div>
                        </div>
                    </div>
                    <div className="slider-dotContainer">₹{minPrice} - ₹{maxPrice}+</div>
                </div>
            </div>
        </div>




        <h4>Filters</h4>
     
  
        {/* Color Filter */}
        <div className="filter-group">
          <h5>Color</h5>
          {colors.map((color) => (
            <div key={color}>
              <input
                type="radio"
                id={`color-${color}`}
                name="color"
                value={color}
                checked={selectedColor === color}
                onChange={() => handleColorChange(color)}
              />
              <label htmlFor={`color-${color}`}>{color}</label>
            </div>
          ))}
        </div>
  
        {/* Category Filter */}
        <div className="filter-group">
          <h5>Category</h5>
          {categories.map((category) => (
            <div key={category}>
              <input
                type="radio"
                id={`category-${category}`}
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              <label htmlFor={`category-${category}`}>{category}</label>
            </div>
          ))}
        </div>
  
        {/* Brand Filter */}
        <div className="filter-group">
          <h5>Brand</h5>
          {brands.map((brand) => (
            <div key={brand}>
              <input
                type="checkbox"
                id={`brand-${brand}`}
                name="brand"
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => handleBrandChange(brand)}
              />
              <label htmlFor={`brand-${brand}`}>{brand}</label>
            </div>
          ))}
        </div>
  
        {/* Reset Filters Button */}
        <button onClick={resetFilters} className="reset-button">
          Reset Filters
        </button>
      </div>
    );
  };
export default Leftside
