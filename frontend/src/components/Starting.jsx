// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Newton from '../assets/Newton.jpg';

// const Starting = () => {
//   const navigate = useNavigate();

//   return (
//     <>
//       <header>
//         <nav className='flex justify-between bg-[#0A1931] text-[#F4C430] p-4'>
//           <div className='m-2'>
//             <h1 className='text-2xl'>Debate Club AI</h1>
//           </div>
//           <ul className='flex space-x-6 m-2'>
//             <li>
//               <a href='#' className='p-2'>Home</a>
//             </li>
//             <li>
//               <a href='#' className='p-2'>About</a>
//             </li>
//             <li>
//               <button 
//                 onClick={() => navigate('/login')}
//                 className='bg-[#CD7F32] text-[#F5F5DC] hover:bg-[#ff9e3e] p-2 px-4 rounded'
//               >
//                 Login
//               </button>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       <main className='bg-[#10284e] h-screen flex flex-col items-center overflow-hidden'>
//         <h1 className='text-5xl text-[#F4C430] p-6 text-center'>
//           TIME TRAVEL DEBATE CLUB
//         </h1>
//         <div className='flex flex-col md:flex-row items-center justify-center w-full p-6'>
//           {/* Text container */}
//           <div className='max-w-lg text-[#F4C430] m-4 text-center md:text-left'>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
//               dignissimos nulla eligendi ducimus quas minima, nisi pariatur
//               ratione aliquam minus quos dolorum iste animi, et a maxime omnis
//               est. Expedita eligendi veritatis hic? Iure reiciendis quaerat nemo
//               ratione deserunt, hic ullam quidem nobis. Quam fugiat possimus
//               ducimus voluptates, similique consequatur?
//             </p>
//             {/* Get Started Button */}
//             <div className='mt-6'>
//               <button 
//                 onClick={() => navigate('/login')}
//                 className='bg-[#F4C430] text-[#10284e] hover:bg-[#FFD700] p-3 px-6 rounded-lg text-lg font-semibold'
//               >
//                 Get Started
//               </button>
//             </div>
//           </div>
//           {/* Image */}
//           <img
//             src={Newton}
//             alt='Newton'
//             className='max-h-[200px] max-w-[200px] m-4'
//           />
//         </div>
//       </main>
//     </>
//   );
// };

// export default Starting;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Newton from '../assets/Newton.jpg';

const Starting = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-[#10284e] h-screen flex flex-col items-center overflow-hidden"
    >
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <nav className="flex justify-between bg-[#0A1931] text-[#F4C430] p-4">
          <h1 className="text-2xl font-bold">Debate Club</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="p-2 hover:text-[#FFD700] transition-colors duration-300">Home</a>
            </li>
            <li>
              <a href="#" className="p-2 hover:text-[#FFD700] transition-colors duration-300">About</a>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigate('/login')}
                className="bg-[#CD7F32] text-[#F5F5DC] hover:bg-[#ff9e3e] p-2 px-4 rounded transition-all"
              >
                Login
              </motion.button>
            </li>
          </ul>
        </nav>
      </motion.header>

      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl text-[#F4C430] p-6 text-center font-bold"
      >
        TIME TRAVEL DEBATE CLUB
      </motion.h1>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full p-6">
        {/* Text container */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg text-[#F4C430] m-4 text-center md:text-left"
        >
          <p className="text-lg">
            Step into the past and shape the future! Join legendary debates with historical figures and test your intellect across time.
          </p>
          {/* Get Started Button */}
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/login')}
              className="bg-[#F4C430] text-[#10284e] hover:bg-[#FFD700] p-3 px-6 rounded-lg text-lg font-semibold transition-all"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          src={Newton}
          alt="Newton"
          className="max-h-[200px] max-w-[200px] m-4 rounded-xl shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default Starting;

