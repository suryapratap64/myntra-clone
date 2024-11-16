import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";
import "../routes/nav.css"
const Header = () => {
  const bag = useSelector((store) => store.bag);

  return (
    <header className="head">
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.webp"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
      <div className="desktop-navContent">
      <div className="desktop-navLink">
        <a href="/shop/men" data-index="0" data-group="men" data-color="#ee5f73" data-type="navElements"  className="desktop-main">
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
        <a href="/shop/men" data-index="0" data-group="men" data-color="#ee5f73" data-type="navElements"  className="desktop-main">
          WOMEN
        </a>
        <div className="desktop-backdropStyle">
          <div className="desktop-paneContent">
            <div className="desktop-categoryContainer" data-index="1" data-group="women" data-color="#fb56c1">
              <ul className="desktop-navBlock">
                <li>
                  <a href="/fusion-wear" style={{ color: "#fb56c1" }} className="desktop-categoryName">Indian & Fusion Wear</a>
                </li>
                <li>
                  <a href="/women-kurtas-kurtis-suits" className="desktop-categoryLink">Kurtas & Suits</a>
                </li>
                <li>
                  <a href="/ethnic-tops" className="desktop-categoryLink">Kurtis, Tunics & Tops</a>
                </li>
                <li>
                  <a href="/saree" className="desktop-categoryLink">Sarees</a>
                </li>
                <li>
                  <a href="/women-ethnic-wear" className="desktop-categoryLink">Ethnic Wear</a>
                </li>
                <li>
                  <a href="/women-ethnic-bottomwear?f=categories%3AChuridar%2CLeggings%2CSalwar" className="desktop-categoryLink">Leggings, Salwars & Churidars</a>
                </li>
                <li>
                  <a href="/skirts-palazzos" className="desktop-categoryLink">Skirts & Palazzos</a>
                </li>
                <li>
                  <a href="/dress-material" className="desktop-categoryLink">Dress Materials</a>
                </li>
                <li>
                  <a href="/lehenga-choli" className="desktop-categoryLink">Lehenga Cholis</a>
                </li>
                <li>
                  <a href="/dupatta-shawl" className="desktop-categoryLink">Dupattas & Shawls</a>
                </li>
                <li>
                  <a href="/women-jackets" className="desktop-categoryLink">Jackets</a>
                </li>
              </ul>
              <ul className="desktop-navBlock">
                <li>
                  <a href="/women-accessories" style={{ color: "#fb56c1" }} className="desktop-categoryName">Belts, Scarves & More</a>
                </li>
                <li>
                  <a href="/women-watches" style={{ color: "#fb56c1" }} className="desktop-categoryName">Watches & Wearables</a>
                </li>
              </ul>
              <ul className="desktop-navBlock">
                <li>
                  <a href="/womens-western-wear" style={{ color: "#fb56c1" }} className="desktop-categoryName">Western Wear</a>
                </li>
                <li>
                  <a href="/dresses?f=Gender%3Amen%20women%2Cwomen" className="desktop-categoryLink">Dresses</a>
                </li>
                <li>
                  <a href="/tops" className="desktop-categoryLink">Tops</a>
                </li>
                <li>
                  <a href="/myntra-fashion-store?f=Categories%3ATshirts%3A%3AGender%3Amen%20women%2Cwomen" className="desktop-categoryLink">Tshirts</a>
                </li>
                <li>
                  <a href="/women-jeans" className="desktop-categoryLink">Jeans</a>
                </li>
                <li>
                  <a href="/women-trousers" className="desktop-categoryLink">Trousers & Capris</a>
                </li>
                <li>
                  <a href="/women-shorts-skirts" className="desktop-categoryLink">Shorts & Skirts</a>
                </li>
                <li>
                  <a href="/myntra-fashion-store?f=Categories%3AClothing%20Set%2CCo-Ords%3A%3AGender%3Amen%20women%2Cwomen" className="desktop-categoryLink">Co-ords</a>
                </li>
                <li>
                  <a href="/playsuit?f=Gender%3Amen%20women%2Cwomen" className="desktop-categoryLink">Playsuits</a>
                </li>
                <li>
                  <a href="/jumpsuits?f=Gender%3Amen%20women%2Cwomen" className="desktop-categoryLink">Jumpsuits</a>
                </li>
                <li>
                  <a href="/women-shrugs" className="desktop-categoryLink">Shrugs</a>
                </li>
                <li>
                  <a href="/women-sweaters-sweatshirts" className="desktop-categoryLink">Sweaters & Sweatshirts</a>
                </li>
                <li>
                  <a href="/women-jackets-coats" className="desktop-categoryLink">Jackets & Coats</a>
                </li>
                <li>
                  <a href="/women-blazers-waistcoats" className="desktop-categoryLink">Blazers & Waistcoats</a>
                </li>
              </ul>
              {/* Continue with similar list items and styling */}
            </div>
          </div>
        </div>
        <a href="/shop/men" data-index="0" data-group="men" data-color="#ee5f73" data-type="navElements"  className="desktop-main">
          kids
        </a>
        <a href="/shop/men" data-index="0" data-group="men" data-color="#ee5f73" data-type="navElements" className="desktop-main">
          HOME & LIVING
        </a>
        <a href="/shop/men" data-index="0" data-group="men" data-color="#ee5f73" data-type="navElements"  className="desktop-main">
         BEAUTY
        </a>
        <a href="/shop/men" data-index="0" data-group="men" data-color="#ee5f73" data-type="navElements"  className="desktop-main">
         STUDIO
        </a>

      </div>

    </div>

       
     
      </nav>
      <div className=" search_bar">
        <IoMdSearch className="search_icon" />
      
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
        />
      </div>
      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonFill />
          <span className="action_name">Profile</span>
        </div>

        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <FaBagShopping />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
