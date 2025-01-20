
// pages/user/SignUp.tsx


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Lock } from 'lucide-react';
import sig from '../../assets/Sig.jpg';
import Phonelogo from '../../assets/Phonelogo.png';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
     phone: '',
     password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f2a229] p-4">
      <div className="w-full max-w-6xl  rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden">
        {/* Left side - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 p-8 flex items-center justify-center "
        >
          {/* Conditional Rendering for Images */}
          <img
            src={sig}
            alt="Illustration"
            className="hidden md:block max-w-full h-auto shadow-lg rounded-lg hover:scale-105 transform transition duration-300"
            style={{ boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.3)' }}
          />
          <img
            src={Phonelogo}
            alt="Phone Illustration"
            className="block md:hidden max-w-full h-auto"
          />
        </motion.div>

        {/* Right side - Sign In Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-1 p-8 md:p-12"
        >
          <div className="max-w-md mx-auto sm:pl-4 ">

            <motion.h2
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-black bg-clip-text text-transparent"
            >
              
              Join Us Today
            </motion.h2>
   <form className="space-y-6" onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                placeholder="Full Name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                placeholder="Email Address"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                placeholder="Phone Number"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                placeholder="Password"
              />
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-black text-white rounded-xl hover:from-blue-600 hover:to-black transform hover:scale-105 transition duration-200 font-semibold"
            >
              Create Account
            </motion.button>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              type="button"
              className="w-full py-3 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition duration-200 flex items-center justify-center space-x-2"
            >
              <img src="/src/assets/gogg.png" alt="Google" className="w-5 h-5" />
              <span>Sign up with Google</span>
            </motion.button>
          </form>

            {/* Sign Up Link */}
                   <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
           className="mt-8 text-center text-gray-600"
         >
           Already have an account?{' '}
           <a href="/signin" className="text-black hover:text-gray-800 font-semibold">
             Sign In
           </a>
         </motion.p>
          </div>
        </motion.div> 
      </div>
    </div>
  );
};

export default SignUp;
