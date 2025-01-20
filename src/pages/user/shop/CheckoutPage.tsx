import React, { useState } from 'react';
import { CreditCard, Truck, ArrowLeft } from 'lucide-react';
import Navbar from '../../../components/common/Navbar';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

interface Address {
  id: number;
  address: string;
}

interface CartItem {
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}

interface CheckoutPageProps {
  cart?: CartItem[];
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  cart = [
    {
      name: 'Big Foot Dance Arena T-Shirt',
      price: 499,
      size: 'L',
      quantity: 2,
      image: '/api/placeholder/80/80',
    },
  ],
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [savedAddresses] = useState<Address[]>([
    { id: 1, address: '123 Main St, Bangalore, Karnataka, 560001' },
    { id: 2, address: '456 Elm St, Thiruvananthapuram, Kerala, 695001' },
  ]);

  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string>('COD');

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 999 ? 0 : 49;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAddress(e.target.value);
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <div className="min-h-screen bg-[#f2a229]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Saved Addresses */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Truck className="w-5 h-5 text-orange-600" />
                <h2 className="text-lg font-semibold">Select Address</h2>
              </div>
              <div className="space-y-4">
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  value={selectedAddress || ''}
                  onChange={handleAddressChange}
                >
                  <option value="" disabled>
                    Select a saved address
                  </option>
                  {savedAddresses.map((address) => (
                    <option key={address.id} value={address.address}>
                      {address.address}
                    </option>
                  ))}
                </select>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Or Enter New Address
                  </label>
                  <textarea
                    name="address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-orange-600" />
                <h2 className="text-lg font-semibold">Payment Options</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="COD"
                    id="cod"
                    checked={paymentMethod === 'COD'}
                    onChange={handlePaymentChange}
                  />
                  <label htmlFor="cod" className="ml-2">
                    Cash on Delivery
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Razorpay"
                    id="razorpay"
                    checked={paymentMethod === 'Razorpay'}
                    onChange={handlePaymentChange}
                  />
                  <label htmlFor="razorpay" className="ml-2">
                    Razorpay
                  </label>
                </div>
                {paymentMethod === 'Razorpay' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiry"
                          placeholder="MM/YY"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                          value={formData.expiry}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          placeholder="123"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                          value={formData.cvv}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
              {/* Price Breakdown */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>₹{shipping}</span>
                </div>
                <div className="flex justify-between font-medium text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
              {/* Place Order Button */}
              <button className="w-full mt-6 bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
