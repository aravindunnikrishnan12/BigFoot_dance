import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../../components/common/Navbar';

// Import images
import Nithin from '../../assets/IMG_1058.jpg';
import Kevin from '../../assets/IMG_1059.jpg';
import Asna from '../../assets/IMG_1060.jpg';
import Gayatri from '../../assets/IMG_1061.jpg';
import Bensun from '../../assets/IMG_1062 - Copy.jpg';
import Aravind from '../../assets/IMG_1064 (1).jpg';
import Reshma from '../../assets/IMG_1061.jpg';
import StudioPic from '../../assets/im3.jpeg';
import StudioPic1 from '../../assets/im3.jpeg';
import StudioPic2 from '../../assets/im3.jpeg';
import Instalogo from '../../assets/insta_logo.png'

function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const studioPics = [StudioPic, StudioPic1, StudioPic2];

  const teamMembers = [
    {
      name: 'Kevin Poulose',
      role: 'Founder, Faculty, Choreographer',
      image: Kevin,
      instagram: 'https://www.instagram.com/kev_in_groovz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', 
    },
    {
      name: 'Nithin Sunny',
      role: 'Faculty, Choreographer',
      image: Nithin,
    },
    {
      name: 'Bensun Benedy',
      role: 'Faculty, Choreographer',
      image: Bensun,
    },
    
    {
      name: 'Asna',
      role: 'Zumba Instructor',
      image: Asna,
    },
    {
      name: 'Asna Khan',
      role: 'Faculty, Choreographer',
      image: Asna,
    },
   
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === studioPics.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? studioPics.length - 1 : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f2a229] to-[#f8b951]">
      <Navbar />

      {/* Hero Section with Slider */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div
          className="relative h-full w-full transition-transform duration-500 ease-out flex"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {studioPics.map((pic, index) => (
            <img
              key={index}
              src={pic}
              alt={`Studio ${index + 1}`}
              className="h-full w-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white/30 p-2 rounded-full hover:bg-white/50 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Hero Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20 w-full max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            BigFoot Dance Arena
          </h1>
          <p className="text-xl text-white drop-shadow-md">
            Where Passion Meets Performance
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            BigFoot Dance Arena was established in 2018 by dance choreographer
            Kevin Poulose with a vision to provide authentic education in dance
            styles and inspire everyone to play a big foot in dancing. We offer a
            diverse range of dance classes for kids, teens, and adults, catering
            to various styles including hip-hop, street dance, contemporary,
            Bollywood, cinematic, Zumba, salsa, bachata, and many more. With
            experienced instructors, authentic training methods, and a lively
            dance floor, BigFoot Dance Arena is your one-stop destination for
            unleashing your passion for dance.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-16">
          <h2 className="text-6xl font-bold text-white text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="relative p-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-12 h-1 bg-[#f2a229] transform -translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300" />

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-[#f2a229] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="h-px w-12 bg-[#f2a229] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    <p className="text-gray-600 font-medium tracking-wide uppercase text-sm">
                      {member.role}
                    </p>
                  </div>

                  {/* Social media placeholder icons */}
                  <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <a
    href={member.instagram}
    target="_blank"
    rel="noopener noreferrer"
    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#f4eadb] p-1.5 transition-all duration-300 flex items-center justify-center group/icon overflow-hidden"
    aria-label={`Visit ${member.name}'s Instagram`}
  >
    <img 
      src={Instalogo} 
      alt="Instagram"
      className="w-full h-full object-contain transition-all duration-300"

    />
  </a>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;