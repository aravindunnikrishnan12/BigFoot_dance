import { useState } from "react";
import log from '../../assets/modal.png';
import {
  FaRunning,
  FaTheaterMasks,
  FaMusic,
  FaChild,
  FaUserFriends,
  FaCrown,
} from "react-icons/fa";

import { motion } from "framer-motion";

const defaultImage = log;

type ClassDetails = {
  description: string;
  timing?: string | string[];
  ageLimit?: string;
  fee: string;
};

const classDetails: Record<string, ClassDetails> = {
  "Open-style Class": {
    description:
      "Intensive training in hip hop, house, locking and other western styles for teens & adults.",
    timing: "Sat & Sun 4:00 to 5:30 pm",
    fee: "Rs 2000/month",
  },
  "Dance for Fun": {
    description:
      "Choreography-based dance classes for ladies who love dancing and want to sweat out their stress and calories.",
    timing: "Tue & Thu 7:00 to 8:00 pm",
    fee: "Rs 2000/month",
  },
  "Zumba": {
    description:
      "Unleash your moves and dance yourself into shape with our Zumba classes.",
    timing: [
      "Tue Wed & Sat 6:30 to 7:30 pm",
      "Mon Wed Fri 10:30 to 11:30 am",
    ],
    fee: "Rs 2500/month",
  },
  "Kids Class": {
    description:
      "Let's make those little feet begin their journey into the world of dancing.",
    timing: ["Wed & Fri 5:00 to 6:00 pm", "Sat & Sun 2:00 to 3:00 pm"],
    ageLimit: "3 to 12 years",
    fee: "Rs 2000/month",
  },
  "Private Class": {
    description:
      "We have personal dance classes where you can make your timings flexible and choose your dance course.",
    fee: "Packages starting from Rs 2500/month",
  },
  "Core Batch": {
    description:
      "Advanced level training in several dance styles aimed at building up the professional dancer in you.",
    timing: "Fri & Sun 6:30 - 8:00 pm",
    fee: "Rs 2000/month",
  },
};

const ServicesData = [
  {
    id: 1,
    title: "Open-style Class",
    icon: <FaUserFriends size={40} color="orange" />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Dance for Fun",
    icon: <FaTheaterMasks size={40} color="purple" />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Zumba",
    icon: <FaMusic size={40} color="blue" />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Kids Class",
    icon: <FaChild size={40} color="red" />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Private Class",
    icon: <FaCrown size={40} color="green" />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Core Batch",
    icon: <FaRunning size={40} color="teal" />,
    delay: 0.7,
  },
];

type AnimatedModalDemoProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  details: ClassDetails;
};

const AnimatedModalDemo: React.FC<AnimatedModalDemoProps> = ({
  isOpen,
  onClose,
  title,
  details,
}) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl p-6 max-w-lg w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-transform transform hover:scale-110"
        >
          ✕
        </button>
        <h4 className="text-2xl md:text-3xl text-gray-800 font-extrabold text-center mb-6">
          {title}
        </h4>
        <div className="flex justify-center items-center mb-6">
          <motion.img
            src={defaultImage}
            alt="Default class image"
            className="rounded-xl shadow-lg h-40 w-40 object-cover ring-2 ring-blue-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div>
          <p className="text-gray-600 text-lg leading-relaxed">{details.description}</p>
          {details.timing && (
            <div className="mt-6">
              <h4 className="font-bold text-lg text-gray-700 mb-2">Timings:</h4>
              {Array.isArray(details.timing) ? (
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {details.timing.map((time, index) => (
                    <li key={index} className="pl-2">{time}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">{details.timing}</p>
              )}
            </div>
          )}
          {details.ageLimit && (
            <div className="mt-4">
              <h4 className="font-bold text-lg text-gray-700 mb-1">Age Limit:</h4>
              <p className="text-gray-600">{details.ageLimit}</p>
            </div>
          )}
          <div className="mt-4">
            <h4 className="font-bold text-lg text-gray-700 mb-1">Fee:</h4>
            <p className="text-gray-600">{details.fee}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const handleLearnMore = (title: string) => {
    setSelectedClass(title);
  };

  return (
    <div className="services-container p-8 bg-[#f2a229]">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Sessions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ServicesData.map((service) => (
          <motion.div
            key={service.id}
            className="service-card bg-[#FFFDD0] rounded-lg shadow-lg p-6 text-center flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: service.delay, duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <button
              onClick={() => handleLearnMore(service.title)}
              className="text-red-800 hover:text-purple-800 font-medium"
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
      {selectedClass && (
        <AnimatedModalDemo
          isOpen={!!selectedClass}
          onClose={() => setSelectedClass(null)}
          title={selectedClass}
          details={classDetails[selectedClass]}
        />
      )}
    </div>
  );
};

export default Services;
