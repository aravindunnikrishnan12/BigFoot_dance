import React from 'react';
import { useParams } from 'react-router-dom';

const services = [
  {
    title: 'Dance choreography works',
    description: 'Custom choreography for performances, events, and music videos',
  },
  {
    title: 'Online and offline classes',
    description: 'Learn from experienced instructors in-person or virtually',
  },
  {
    title: 'Stage performances and events',
    description: 'Professional dance performances for various occasions',
  },
  {
    title: 'Studio rentals',
    description: 'Fully equipped dance studios available for rent',
  },
  {
    title: 'Dance workshops',
    description: 'Intensive training sessions for all skill levels',
  },
  {
    title: 'Dance competition judgements',
    description: 'Expert judging services for dance competitions',
  },
  {
    title: 'Video and audio editing',
    description: 'Professional editing services for dance content',
  },
];

const ServiceDetails = () => {
  const { title } = useParams();

  // Find the service details based on the title
  const service = services.find((s) => s.title === title);

  if (!service) {
    return <div className="text-center mt-20">Service not found!</div>;
  }

  return (
    <div className="min-h-screen bg-[#f2a229]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">{service.title}</h1>
        <p className="text-lg text-gray-700">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
