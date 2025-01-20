import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
}

interface ProductListingProps {
  products: Product[];
}

const ProductCard = ({ product }: { product: Product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-xl overflow-hidden"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.button
        className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
      </motion.button>

      <div className="relative h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white p-3 rounded-full shadow-lg"
          >
            <Eye className="w-5 h-5 text-gray-700" />
          </motion.button>
        </motion.div>
      </div>

      <div className="p-6">
        <div className="text-sm text-[#f2a229] font-medium mb-2">NEW ARRIVAL</div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#f2a229] transition-colors">
            <Link to={`/shop/ProductDetailPage`}>{product.name}</Link>
          </h3>
          <div className="text-lg font-bold text-[#f2a229]">{product.price}</div>
        </div>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#f2a229] text-[#f2a229]" />
          ))}
          <span className="text-sm text-gray-500 ml-2">(4.5)</span>
        </div>
        <motion.button
          className="w-full bg-primary text-white py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#d88d1f] transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

const ProductListing = ({ products }: ProductListingProps) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-white drop-shadow-lg mb-4"
        >
          Shop Our Products
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-white/80 max-w-2xl mx-auto"
        >
          Discover our latest collection of premium products
        </motion.p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
