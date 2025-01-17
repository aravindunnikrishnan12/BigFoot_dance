// pages/user/SignIn.tsx

import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import sig from '../../assets/Sig.jpg';
import Phonelogo from '../../assets/Phonelogo.png';


const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle SignIn logic here
    console.log('Sign In Data:', formData);
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
              Welcome Back
            </motion.h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Input with Icon */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Email Address"
                  required
                />
              </motion.div>

              {/* Password Input with Icon */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="Password"
                  required
                />
              </motion.div>

              {/* Remember Me and Forgot Password */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 rounded border-gray-300"
                  />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                    Remember me
                  </label>
                </div>
                <a
                  href="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-700"
                >
                  Forgot password?
                </a>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-500 to-black text-white rounded-xl hover:from-blue-600 hover:to-black transform hover:scale-105 transition duration-200 font-semibold"
              >
                Sign In
              </motion.button>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="relative my-6"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </motion.div>

              {/* Google Sign-In Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                type="button"
                className="w-full py-3 bg-white border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition duration-200 flex items-center justify-center space-x-2"
              >
                <img
                  src="/src/assets/gogg.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span>Sign in with Google</span>
              </motion.button>
            </form>

            {/* Sign Up Link */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-center text-gray-600"
            >
              Don't have an account?{' '}
              <a
                href="/signup"
                className="text-black hover:text-gray-800 font-semibold"
              >
                Sign Up
              </a>
            </motion.p>
          </div>
        </motion.div> 
      </div>
    </div>
  );
};

export default SignIn;
