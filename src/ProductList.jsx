import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import CartItem from './CartItem';
import { addItem } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  // Calculate total number of items in cart dynamically
  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          description: 'Produces oxygen at night and filters toxins from the air.',
          cost: '$15',
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          description: 'Resilient houseplant that filters formaldehyde and xylene.',
          cost: '$12',
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          description: 'Graceful white blooms that cleanse mold spores from air.',
          cost: '$18',
        },
        {
          name: 'Boston Fern',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          description: 'Adds humidity and removes airborne pollutants efficiently.',
          cost: '$20',
        },
        {
          name: 'Rubber Plant',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          description: 'Glossy broad leaves that effectively absorb carbon monoxide.',
          cost: '$17',
        },
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          description: 'Soothes burns and actively purifies indoor living environments.',
          cost: '$14',
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop',
          description: 'Soothing floral scent widely used to promote restful sleep.',
          cost: '$20',
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop',
          description: 'Sweet intoxicating aroma that naturally uplifts mood.',
          cost: '$18',
        },
        {
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          description: 'Invigorating herb with fragrant culinary and wellness uses.',
          cost: '$15',
        },
        {
          name: 'Mint',
          image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          description: 'Crisp, refreshing aroma great for tea and kitchen windowsills.',
          cost: '$12',
        },
        {
          name: 'Lemon Balm',
          image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          description: 'Gentle citrus fragrance known to relieve tension and stress.',
          cost: '$14',
        },
        {
          name: 'Hyacinth',
          image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          description: 'Vibrant spring blossom with an intensely delightful perfume.',
          cost: '$22',
        },
      ],
    },
    {
      category: 'Medicinal Plants',
      plants: [
        {
          name: 'Chamomile',
          image: 'https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg',
          description: 'Daisy-like blossoms renowned for calming teas and rest.',
          cost: '$15',
        },
        {
          name: 'Peppermint',
          image: 'https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg',
          description: 'Contains menthol to aid healthy digestion and soothing relief.',
          cost: '$13',
        },
        {
          name: 'Echinacea',
          image: 'https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg',
          description: 'Classic purple coneflower that strengthens natural immunity.',
          cost: '$16',
        },
        {
          name: 'Calendula',
          image: 'https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg',
          description: 'Bright golden petals used to heal skin irritations and wounds.',
          cost: '$12',
        },
        {
          name: 'Oregano',
          image: 'https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg',
          description: 'Packed with rich antioxidants and powerful antimicrobial compounds.',
          cost: '$10',
        },
        {
          name: 'Catnip',
          image: 'https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg',
          description: 'Natural feline favorite that also serves as an insect deterrent.',
          cost: '$11',
        },
      ],
    },
    {
      category: 'Low Maintenance Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop',
          description: 'Thrives in low light conditions and needs very infrequent watering.',
          cost: '$25',
        },
        {
          name: 'Pothos',
          image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
          description: 'Hardy trailing vine that adapts effortlessly to any home room.',
          cost: '$10',
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
          description: 'Virtually indestructible indoor plant that tolerates low lighting.',
          cost: '$20',
        },
        {
          name: 'Succulents',
          image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
          description: 'Drought-tolerant architectural beauties with low water needs.',
          cost: '$18',
        },
        {
          name: 'Aglaonema',
          image: 'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg',
          description: 'Variegated foliage providing striking color with little maintenance.',
          cost: '$22',
        },
        {
          name: 'Jade Plant',
          image: 'https://cdn.pixabay.com/photo/2017/08/07/14/02/crassula-2604185_1280.jpg',
          description: 'Symbol of good luck with plump glossy leaves that thrive on light.',
          cost: '$16',
        },
      ],
    },
  ];

  // Keep addedToCart synced with cartItems
  useEffect(() => {
    const updatedStatus = {};
    cartItems.forEach((item) => {
      updatedStatus[item.name] = true;
    });
    setAddedToCart(updatedStatus);
  }, [cartItems]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({
      ...prev,
      [plant.name]: true,
    }));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = () => {
    setShowCart(false);
  };

  return (
    <div className="product-page-wrapper">
      {/* Navbar appearing on both Product Listing and Cart pages */}
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/" onClick={handleHomeClick} className="brand-link">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt="Paradise Nursery Logo"
              className="brand-logo"
            />
            <div className="brand-text">
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </a>
        </div>

        <div className="navbar-links">
          <a href="#home" onClick={handleHomeClick} className="nav-item">
            Home
          </a>
          <a href="#plants" onClick={handlePlantsClick} className="nav-item">
            Plants
          </a>
          <a href="#cart" onClick={handleCartClick} className="nav-item cart-link">
            <div className="cart-icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                height="40"
                width="40"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle cx="80" cy="216" r="16" fill="white"></circle>
                <circle cx="184" cy="216" r="16" fill="white"></circle>
                <path
                  d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                ></path>
              </svg>
              <span className="cart-badge">{totalCartCount}</span>
            </div>
          </a>
        </div>
      </nav>

      {/* Conditional rendering of Catalog or Shopping Cart */}
      {!showCart ? (
        <div className="product-grid">
          <div className="catalog-header">
            <h2>Our Houseplant Collection</h2>
            <p>Bring the beauty and tranquility of living plants into your sanctuary.</p>
          </div>

          {plantsArray.map((categoryGroup, index) => (
            <div key={index} className="category-section">
              <div className="category-header">
                <h3 className="category-title">{categoryGroup.category}</h3>
              </div>
              <div className="product-list">
                {categoryGroup.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <div className="product-image-container">
                      <img
                        className="product-image"
                        src={plant.image}
                        alt={plant.name}
                      />
                    </div>
                    <div className="product-info">
                      <h4 className="product-title">{plant.name}</h4>
                      <p className="product-description">{plant.description}</p>
                      <div className="product-price">{plant.cost}</div>
                      <button
                        className={`product-button ${addedToCart[plant.name] ? 'added-to-cart' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedToCart[plant.name]}
                      >
                        {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
