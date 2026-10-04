# Paradise Nursery Shopping Application

A responsive e-commerce web application for **Paradise Nursery**, an online plant store offering a diverse collection of indoor and outdoor houseplants. Built with **React**, **Redux Toolkit**, and **Vite**, this application provides a seamless shopping experience for plant enthusiasts.

## Project Overview

Paradise Nursery is designed to bring nature closer to everyday living spaces. Users can explore carefully curated categories of houseplants, learn about their unique benefits, add plants to their shopping cart, and dynamically manage item quantities and order totals.

## Key Features

- **Landing Page**: An inviting home page featuring a lush nursery background image, company name, tagline ("Where Green Meets Serenity"), mission details in the **About Us** section, and a "Get Started" call-to-action button.
- **Product Catalog**:
  - Organized into distinct categories (Air Purifying, Aromatic Fragrant, Medicinal, and Low Maintenance).
  - Each category displays at least six unique houseplants with high-quality thumbnails, plant names, descriptions, and prices.
  - Interactive **Add to Cart** buttons that disable upon addition to prevent accidental duplicate clicks while updating cart state.
- **Dynamic Navigation Bar**:
  - Persistent navbar across Product Listing and Shopping Cart views.
  - Navigation links to Home, Plants catalog, and Shopping Cart.
  - Interactive cart icon displaying a real-time badge count of total items in the cart.
- **Shopping Cart Management**:
  - Itemized display with thumbnails, plant names, unit prices, and quantities.
  - Subtotal calculation for each individual plant item.
  - Total cart amount calculated dynamically.
  - Increment (`+`) and decrement (`-`) quantity controls with automatic item removal when quantity reaches zero.
  - Delete button to instantly remove specific plants.
  - "Continue Shopping" button returning users directly to the plant selection catalog.
  - "Checkout" button with an interactive prompt.
- **Redux State Management**: Centralized store with a custom `CartSlice` managing `addItem`, `removeItem`, and `updateQuantity` actions.

## Technologies Used

- **React**: Functional components and hooks (`useState`, `useEffect`)
- **Redux Toolkit**: Centralized state management for shopping cart operations
- **React-Redux**: Connecting React components to Redux store (`useSelector`, `useDispatch`)
- **Vite**: Rapid frontend development tooling and bundler
- **CSS3**: Responsive layouts, flexbox, transitions, and hover effects

## Project Structure

```
e-plantShopping/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── AboutUs.jsx
├── App.css
├── App.jsx
├── CartSlice.jsx
├── ProductList.jsx
├── CartItem.jsx
└── src/
    ├── AboutUs.css
    ├── AboutUs.jsx
    ├── App.css
    ├── App.jsx
    ├── CartItem.css
    ├── CartItem.jsx
    ├── CartSlice.jsx
    ├── index.css
    ├── main.jsx
    ├── ProductList.css
    ├── ProductList.jsx
    └── store.js
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sohamd530-eng/e-plantShopping.git
   cd e-plantShopping
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.
