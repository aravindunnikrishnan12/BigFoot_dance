
//src//components/Banner/Banner.tsx 
import  { useState } from "react";
import { motion } from "framer-motion";
import BigVideo from "../../assets/BigVideo.mp4";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import ReviewsSection from "../Reviews/Reviews";

const Banner2 = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleAudio = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 bg-[#f2a229]">
    
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Our Community to Start your Journey
            </h1>
            <p className="text-grey">
              Join our dance family and groove with us! Whether you're a beginner or a pro, every step you take brings us closer as a community. Let's move, connect, and create memories together!
            </p>
            <a href="" className="primary-btn !mt-8">
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Video with Volume Icon */}
        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-[550px] md:max-w-[550px] rounded-lg shadow-lg overflow-hidden relative"
          >
            <video
              src={BigVideo}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="object-cover w-full h-auto"
            />
            {/* Volume Control Icon - Repositioned to top left */}
            <div
              onClick={toggleAudio}
              className="absolute top-4 left-4 cursor-pointer bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              {isMuted ? (
                <FaVolumeMute className="text-white text-xl" />
              ) : (
                <FaVolumeUp className="text-white text-xl" />
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <ReviewsSection/>
      <div className="w-full h-[100px] relative">
        <svg 
          className="w-full h-full absolute top-0 left-0" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#f2a229" 
            d="M0,0 L1440,0 L1440,30 Q720,100 0,30 Z"
          />
          <path 
            fill="#FFFDD0" 
            d="M0,30 Q720,100 1440,30 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Banner2;