import React from 'react';
import "./nav.css"

const NavigationMenu = () => {
  return (
    <div className="desktop-navContent">
      <div className="desktop-navLink">
        <a href="/shop/men" data-index="0" data-group="men" data-color="#ee5f73" data-type="navElements" style={{ borderBottomColor: '#ee5f73' }} className="desktop-main">
          Men
        </a>
        <div className="desktop-backdropStyle">
          <div className="desktop-paneContent">
            <div className="desktop-categoryContainer" data-index="0" data-group="men" data-color="#ee5f73">
              
              {/* First Column */}
              <li className="desktop-oddColumnContent">
                <ul className="desktop-navBlock">
                  <li><a href="/men-topwear" style={{ color: '#ee5f73' }} className="desktop-categoryName">Topwear</a></li>
                  <li><a href="/men-tshirts" className="desktop-categoryLink">T-Shirts</a></li>
                  <li><a href="/men-casual-shirts" className="desktop-categoryLink">Casual Shirts</a></li>
                  <li><a href="/men-formal-shirts" className="desktop-categoryLink">Formal Shirts</a></li>
                  <li><a href="/men-sweatshirts" className="desktop-categoryLink">Sweatshirts</a></li>
                  <li><a href="/men-sweaters" className="desktop-categoryLink">Sweaters</a></li>
                  <li><a href="/men-jackets" className="desktop-categoryLink">Jackets</a></li>
                  <li><a href="/men-blazers" className="desktop-categoryLink">Blazers & Coats</a></li>
                  <li><a href="/men-suits" className="desktop-categoryLink">Suits</a></li>
                  <li><a href="/rain-jacket" className="desktop-categoryLink">Rain Jackets</a></li>
                  <div className="desktop-hrLine"></div>
                  <li><a href="/men-ethnic-wear" style={{ color: '#ee5f73' }} className="desktop-categoryName">Indian & Festive Wear</a></li>
                  <li><a href="/men-kurtas" className="desktop-categoryLink">Kurtas & Kurta Sets</a></li>
                  <li><a href="/sherwani" className="desktop-categoryLink">Sherwanis</a></li>
                  <li><a href="/nehru-jackets" className="desktop-categoryLink">Nehru Jackets</a></li>
                  <li><a href="/dhoti" className="desktop-categoryLink">Dhotis</a></li>
                </ul>
              </li>
              
              {/* Second Column */}
              <li className="desktop-evenColumnContent desktop-oddColumnContent">
                <ul className="desktop-navBlock">
                  <li><a href="/men-bottomwear" style={{ color: '#ee5f73' }} className="desktop-categoryName">Bottomwear</a></li>
                  <li><a href="/men-jeans" className="desktop-categoryLink">Jeans</a></li>
                  <li><a href="/men-casual-trousers" className="desktop-categoryLink">Casual Trousers</a></li>
                  <li><a href="/men-formal-trousers" className="desktop-categoryLink">Formal Trousers</a></li>
                  <li><a href="/mens-shorts" className="desktop-categoryLink">Shorts</a></li>
                  <li><a href="/men-trackpants" className="desktop-categoryLink">Track Pants & Joggers</a></li>
                  <div className="desktop-hrLine"></div>
                  <li><a href="/men-innerwear" style={{ color: '#ee5f73' }} className="desktop-categoryName">Innerwear & Sleepwear</a></li>
                  <li><a href="/men-briefs-and-trunks" className="desktop-categoryLink">Briefs & Trunks</a></li>
                  <li><a href="/men-boxers" className="desktop-categoryLink">Boxers</a></li>
                  <li><a href="/men-innerwear-vests" className="desktop-categoryLink">Vests</a></li>
                  <li><a href="/men-nightwear" className="desktop-categoryLink">Sleepwear & Loungewear</a></li>
                  <li><a href="/men-thermals" className="desktop-categoryLink">Thermals</a></li>
                  <div className="desktop-hrLine"></div>
                  <li><a href="/men-plus-size?f=Gender%3Amen%2Cmen%20women" style={{ color: '#ee5f73' }} className="desktop-categoryName">Plus Size</a></li>
                </ul>
              </li>

              {/* More Columns... */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
