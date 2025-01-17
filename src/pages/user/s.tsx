

// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalTrigger,
// } from "../../components/magicui/animated-modal";
// import Image from "next/image";
// import { motion } from "framer-motion";

// export function AnimatedModalDemo() {
//   const images = [
//     "../../assets/logo.jpg",
//     "../../assets/logo.jpg",
//     "../../assets/logo.jpg",
//     "../../assets/logo.jpg",
//     "../../assets/logo.jpg"
//     ];
//   return (
//     <div className="py-40  flex items-center justify-center">
//       <Modal>
      
//         <ModalBody>
//           <ModalContent>
//             <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
//               serServicesData.title
            
//             </h4>
//             <div className="flex justify-center items-center">
//               {images.map((image, idx) => (
//                 <motion.div
//                   key={"images" + idx}
//                   style={{
//                     rotate: Math.random() * 20 - 10,
//                   }}
//                   whileHover={{
//                     scale: 1.1,
//                     rotate: 0,
//                     zIndex: 100,
//                   }}
//                   whileTap={{
//                     scale: 1.1,
//                     rotate: 0,
//                     zIndex: 100,
//                   }}
//                   className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
//                 >
//                   <Image
//                     src={image}
//                     alt="bali images"
//                     width="500"
//                     height="500"
//                     className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//             <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
//              <p>
//  classDetails 

//              </p>
//             </div>
//           </ModalContent>
        
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// }

