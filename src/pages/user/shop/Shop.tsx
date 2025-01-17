
import Tshirt from '../../../assets/Tshirt.jpg'
import { motion } from 'framer-motion';
import { ShoppingBag, TrendingUp, Award } from 'lucide-react';
import Navbar from '../../../components/common/Navbar';
import ProductListing from './ProductListing';
// import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 'Rs:400',
    image: Tshirt,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 'Rs:600',
    image: Tshirt,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 'Rs:500',
    image: Tshirt,
  },
];

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-[#f2a229]">
      <Navbar/>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <ShoppingBag className="w-12 h-12 mb-4 text-[#f2a229]" />
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Handpicked products ensuring the highest quality standards</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <TrendingUp className="w-12 h-12 mb-4 text-[#f2a229]" />
              <h3 className="text-xl font-bold mb-2">Latest Trends</h3>
              <p className="text-gray-600">Stay ahead with our constantly updated collection</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <Award className="w-12 h-12 mb-4 text-[#f2a229]" />
              <h3 className="text-xl font-bold mb-2">Best Deals</h3>
              <p className="text-gray-600">Competitive prices with regular special offers</p>
            </motion.div>
          </div>

          {/* Animated Banner */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Discover Your Style
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Explore our carefully curated collection of premium products designed to elevate your wardrobe
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#f2a229] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-opacity-90 transition-all"
            >
              Explore Collection
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Product Listing */}
    <ProductListing  products={products}/>
    </div>
  );
};

export default ShopPage;