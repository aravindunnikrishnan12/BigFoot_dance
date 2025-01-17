import React, { useState } from 'react';
import { Calendar, Music, Video, Users, School, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/common/Navbar';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      title: 'Dance choreography works',
      icon: <Users className="w-6 h-6" />,
      description: 'Custom choreography for performances, events, and music videos',
    },
    {
      title: 'Online and offline classes',
      icon: <School className="w-6 h-6" />,
      description: 'Learn from experienced instructors in-person or virtually',
    },
    {
      title: 'Stage performances and events',
      icon: <Users className="w-6 h-6" />,
      description: 'Professional dance performances for various occasions',
    },
    {
      title: 'Studio rentals',
      icon: <Calendar className="w-6 h-6" />,
      description: 'Fully equipped dance studios available for rent',
    },
    {
      title: 'Dance workshops',
      icon: <Music className="w-6 h-6" />,
      description: 'Intensive training sessions for all skill levels',
    },
    {
      title: 'Dance competition judgements',
      icon: <Trophy className="w-6 h-6" />,
      description: 'Expert judging services for dance competitions',
    },
    {
      title: 'Video and audio editing',
      icon: <Video className="w-6 h-6" />,
      description: 'Professional editing services for dance content',
    },
  ];

  const handleServiceClick = (title) => {
    navigate(`/services/details/${title}`);
  };

  return (
    <div className="min-h-screen bg-[#f2a229]">
          <Navbar/>
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Our Services</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <motion.div
                className={`h-full bg-white/90 backdrop-blur-sm rounded-2xl p-8 
                  transition-all duration-300 shadow-lg 
                  ${hoveredIndex === index ? 'shadow-2xl' : ''}`}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-400/10 
                    rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <motion.div 
                  className="relative flex items-center mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="p-4 bg-orange-100 rounded-xl shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold ml-4 text-gray-800 group-hover:text-orange-600 
                    transition-colors duration-300">
                    {service.title}
                  </h3>
                </motion.div>

                <p className="text-gray-600 mb-8 group-hover:text-gray-800 transition-colors duration-300">
                  {service.description}
                </p>

                <button
                  className="w-full py-3 px-6 bg-primary text-white rounded-lg font-medium
                    hover:bg-dark transition-colors duration-300 transform
                    hover:scale-105 active:scale-95"
                  onClick={() => handleServiceClick(service.title)}
                >
                  Click for More
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;