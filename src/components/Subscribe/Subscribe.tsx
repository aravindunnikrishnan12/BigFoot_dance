import { FaBell } from "react-icons/fa";

import { motion } from "framer-motion";

import Un from '../../assets/Un.gif'
const bgStyle = {
  backgroundImage: `url(${Un})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-[#f2a229]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
          <h1 className="text-4xl font-bold !leading-snug">
  100+ Students are learning with us
</h1>
<p>
  Join our growing community of dancers. 
  <span className="font-semibold">Subscribe to our channel</span> for more dance Videos and updates!
</p>

<a
  href="http://www.youtube.com/@BigFootDanceArena"
  target="_blank"
  rel="noopener noreferrer"
  className="primary-btn !mt-8 inline-flex items-center gap-4 group"
>
  Subscribe Now
  <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
</a>

          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
