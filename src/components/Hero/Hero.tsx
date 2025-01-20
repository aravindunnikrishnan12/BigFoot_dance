import  { useState } from "react";
import Navbar from "../common/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import Herovideo from "../../assets/Herovideo.mp4";
import WhiteImage from "../../assets/whiteBig.png";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

import img4 from '../../assets/im4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/im6.jpg'
import img7 from '../../assets/im7.jpg'

// ExpandedImageView Component
interface ExpandedImageViewProps {
  isOpen: boolean;
  onClose: () => void;
  image: string; // Assuming 'image' is a string (URL or base64 image string)
  title: string; // 'title' is a string
  description: string; // 'description' is a string
}
const ExpandedImageView : React.FC<ExpandedImageViewProps>= ({ isOpen, onClose, image, title, description }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="relative">
          {/* Image Section */}
          <div className="relative h-96">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content Section */}
          <div className="p-6 bg-white space-y-6">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="text-gray-700">{description}</p>
            
            {/* Dynamic Content Based on Title */}
            {title === "Classes" && (
  <div className="space-y-2">
   
    <div className="space-y-2">
   
    
    </div>
  </div>
)}

            {title === "Events" && (
              <div className="space-y-2">
              
                
              </div>
            )}
            {title === "Workshops" && (
              <div className="space-y-2">
               
               
              </div>
            )}
            {title === "Competitions" && (
              <div className="space-y-2">
                
              
              </div>
            )}

            {/* Buttons Section */}
            <div className="flex justify-end gap-4">
              <button 
                onClick={onClose} 
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-full hover:bg-gray-400 transition-colors"
              >
                Close
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Animation utility function
export const FadeUp = (delay: number) => {
  return {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
};

// Hero Component
const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleAudio = () => {
    setIsMuted(!isMuted);
  };

  const contentData = {
    Classes: {
      image: img4,
      title: "Classes",
      description: "Join our diverse range of dance classes designed for all skill levels. Our experienced instructors provide personalized attention to help you develop your technique, style, and confidence. Whether you're a complete beginner or an advanced dancer, we have the perfect class for you."
    },
    Events: {
      image: img5,
      title: "Events",
      description: "Experience the excitement of our dance events throughout the year. From showcases to performances, our events bring together dancers from all backgrounds to celebrate the art of movement. Join our vibrant community and be part of something special."
    },
    Workshops: {
      image: img6,
      title: "Workshops",
      description: "Enhance your skills with our intensive workshops led by industry professionals. These focused sessions provide deep dives into specific styles, techniques, and choreography. Perfect for dancers looking to take their abilities to the next level."
    },
    Competitions: {
      image: img7,
      title: "Competitions",
      description: "Challenge yourself and showcase your talent in our dance competitions. With multiple categories and skill levels, these events provide the perfect platform to perform, compete, and grow as a dancer. Fantastic prizes and opportunities await!"
    }
  };

  return (
    <section className="bg-[#f2a229] overflow-hidden relative">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="text-center md:text-left space-y-10 lg:max-w-[500px] xl:ml-5 mt-36">
          <motion.h1
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="text-4xl lg:text-5xl font-bold !leading-tight text-gray-800 drop-shadow-sm"
          >
            Let's Learn with Big Footdance,
            <br />
            <span className="text-primary">Take Your First Step</span> with Us
          </motion.h1>
          <motion.div
            variants={FadeUp(0.8)}
            initial="initial"
            animate="animate"
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn flex items-center gap-3 group bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
              <span className="font-semibold">Get Started</span>
              <IoIosArrowRoundForward className="text-2xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Hero Video Section */}
        <div
          className="relative flex justify-center items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            className="w-[550px] md:max-w-[550px] rounded-lg shadow-2xl overflow-hidden relative"
          >
            {isHovered ? (
              <video
                src={Herovideo}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="object-cover w-full h-auto shadow-2xl"
              />
            ) : (
              <img
                src={WhiteImage}
                alt="Placeholder"
                className="object-cover w-full h-auto shadow-2xl"
              />
            )}
            {/* Volume Control Icon */}
            {isHovered && (
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
            )}
          </motion.div>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="container mt-10">
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-4 overflow-x-auto">
          {Object.entries(contentData).map(([key, data]) => (
            <div key={key} className="flex-shrink-0 w-full md:w-1/3 max-w-[300px]">
              <div className="relative h-[200px]">
                <img
                  src={data.image}
                  alt={data.title}
                  className="rounded-lg shadow-lg w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end rounded-lg text-white">
                  <h2 className="text-xl font-bold">{data.title}</h2>
                  <p className="text-sm truncate">{data.description}</p>
                  <a
                    href="#"
                  className="text-white mt-2 "
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedImage(data);
                      setIsModalOpen(true);
                    }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Image View Modal */}
      <ExpandedImageView
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  image={selectedImage?.image || ''}
  title={selectedImage?.title || ''}
  description={selectedImage?.description || ''}
/>

    </section>
  );
};

export default Hero;