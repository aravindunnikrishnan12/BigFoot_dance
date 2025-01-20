import { useState } from 'react';
import Tshirt from '../../../assets/Tshirt.jpg';
import { ShoppingCart, Heart, Star, Share2, Package, Shield, RefreshCw, Plus, Minus } from 'lucide-react';
import Navbar from '../../../components/common/Navbar';
import { Link } from "react-router-dom";

// Define the type for the product prop
interface Product {
  name: string;
  image: string;
  price: number;
  description: string;
  rating: number;
  category: string;
  brand: string;
  stock: number;
}

interface ProductDetailPageProps {
  product: Product;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  const [isWishlist, setIsWishlist] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const features = [
    { icon: Package, title: 'Free Delivery', desc: 'For orders above ₹999' },
    { icon: Shield, title: 'Secure Payment', desc: '100% secure payment' },
    { icon: RefreshCw, title: 'Easy Returns', desc: '30 day return policy' },
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase' && quantity < product.stock) {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#f2a229]">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Image */}
            <div className="space-y-4">
              <div className="relative group">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <button
                  onClick={() => setIsWishlist(!isWishlist)}
                  className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'
                    }`}
                  />
                </button>
                <button className="absolute top-4 left-4 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-8">
              <div>
                <p className="text-orange-600 font-medium mb-2">{product.category}</p>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < product.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">({product.rating}.0)</span>
                  <span className="text-orange-600">Verified Product</span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ₹{(product.price * 1.25).toFixed(0)}
                  </span>
                  <span className="text-green-600 font-medium">20% OFF</span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-900">Select Size</h3>
                    <button className="text-orange-600 text-sm hover:underline">Size Guide</button>
                  </div>
                  <div className="flex gap-3 flex-wrap">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-14 h-14 rounded-lg font-medium border-2 transition-all duration-300 ${
                          selectedSize === size
                            ? 'border-orange-600 bg-orange-50 text-orange-600'
                            : 'border-gray-300 hover:border-orange-600'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selection */}
                <div className="space-y-2">
                  <h3 className="font-medium text-gray-900">Quantity</h3>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-300 rounded-lg">
                      <button
                        onClick={() => handleQuantityChange('decrease')}
                        className="p-2 hover:bg-gray-100 rounded-l-lg"
                        disabled={quantity <= 1}
                      >
                        <Minus className="w-5 h-5 text-gray-600" />
                      </button>
                      <span className="w-12 text-center font-medium">{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange('increase')}
                        className="p-2 hover:bg-gray-100 rounded-r-lg"
                        disabled={quantity >= product.stock}
                      >
                        <Plus className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    <span className="text-gray-600">
                      {product.stock} pieces available
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="p-4 text-center bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                      <feature.icon className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                      <h3 className="font-medium text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-primary text-white py-4 px-8 rounded-lg font-medium hover:bg-dark transform hover:scale-105 transition-all duration-300">
                    <Link to={`/CheckoutPage`}>Buy Now</Link>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-600 py-4 px-8 rounded-lg font-medium hover:bg-orange-50 transform hover:scale-105 transition-all duration-300">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h2 className="font-medium text-gray-900 mb-4">Product Details</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span className="text-gray-600">Material</span>
                      <span className="font-medium">Cotton</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Category</span>
                      <span className="font-medium">{product.category}</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span className="text-gray-600">Stock</span>
                      <span className="font-medium">{product.stock} available</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Brand</span>
                      <span className="font-medium">No Brand</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const product = {
  name: 'Big Foot Dance Arena T-Shirt',
  image: Tshirt,
  price: 499,
  description:
    'Unisex cotton material T-shirt perfect for casual wear or dance practices. Lightweight, comfortable, and stylish.',
  rating: 4,
  category: 'Clothing',
  brand: 'No Brand',
  stock: 20,
};

// export default () => <ProductDetailPage product={product} />;

export default function App() {
  return <ProductDetailPage product={product} />;
}