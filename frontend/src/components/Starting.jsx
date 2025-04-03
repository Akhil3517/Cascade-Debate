// import React from 'react';
// import Newton from '../assets/Newton.jpg';

// const Starting = () => {
//   return (
//     <>
//       <header>
//         <nav className='flex justify-between bg-[#0A1931] text-[#F4C430]'>
//           <div className='m-5'>
//             <h1 className='text-2xl'>Debate Club AI</h1>
//           </div>
//           <div>
//             <ul className='flex justify-betweenx'>
//               <li className='m-5 p-1'>
//                 <a href='#'>Home</a>
//               </li>
//               <li className='m-5 p-1'>
//                 <a href='#'>About</a>
//               </li>
//               <li className='m-5'>
//                 <button className='bg-[#CD7F32] text-[#F5F5DC] hover:bg-[#ff9e3e] p-1 px-3 rounded'>
//                   Login
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//       <body style={{ margin: 0, overflow: 'hidden', height: '100vh' }}>
//         <h1 className='flex justify-center p-5 text-5xl bg-[#10284e] text-[#F4C430]'>
//           TIME TRAVEL DEBATE CLUB
//         </h1>
//         <div
//           className='flex items-center bg-[#10284e] min-h-screen justify-between'
//           style={{ flexDirection: 'row', height: 'calc(100vh - 150px)' }}
//         >
//           {/* text container */}
//           <div className='flex-wrap max-w-[500px] m-5 text-[#F4C430]'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
//             dignissimos nulla eligendi ducimus quas minima, nisi pariatur
//             ratione aliquam minus quos dolorum iste animi, et a maxime omnis
//             est. Expedita eligendi veritatis hic? Iure reiciendis quaerat nemo
//             ratione deserunt, hic ullam quidem nobis. Quam fugiat possimus
//             ducimus voluptates, similique consequatur?
//           </div>
//           {/* this will contain an img */}
//           <div className='flex'>
//             <img
//               src={Newton}
//               alt='img'
//               style={{ maxHeight: '200px', maxWidth: '200px' }}
//               className='m-[50px] space-x-11'
//             />
//           </div>
//         </div>
//       </body>
//     </>
//   );
// };

// export default Starting;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Newton from '../assets/Newton.jpg';

const Starting = () => {
  const navigate = useNavigate();

  return (
    <>
      <header>
        <nav className='flex justify-between bg-[#0A1931] text-[#F4C430] p-4'>
          <div className='m-2'>
            <h1 className='text-2xl'>Debate Club AI</h1>
          </div>
          <ul className='flex space-x-6 m-2'>
            <li>
              <a href='#' className='p-2'>Home</a>
            </li>
            <li>
              <a href='#' className='p-2'>About</a>
            </li>
            <li>
              <button 
                onClick={() => navigate('/login')}
                className='bg-[#CD7F32] text-[#F5F5DC] hover:bg-[#ff9e3e] p-2 px-4 rounded'
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className='bg-[#10284e] h-screen flex flex-col items-center overflow-hidden'>
        <h1 className='text-5xl text-[#F4C430] p-6 text-center'>
          TIME TRAVEL DEBATE CLUB
        </h1>
        <div className='flex flex-col md:flex-row items-center justify-center w-full p-6'>
          {/* Text container */}
          <div className='max-w-lg text-[#F4C430] m-4 text-center md:text-left'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              dignissimos nulla eligendi ducimus quas minima, nisi pariatur
              ratione aliquam minus quos dolorum iste animi, et a maxime omnis
              est. Expedita eligendi veritatis hic? Iure reiciendis quaerat nemo
              ratione deserunt, hic ullam quidem nobis. Quam fugiat possimus
              ducimus voluptates, similique consequatur?
            </p>
            {/* Get Started Button */}
            <div className='mt-6'>
              <button 
                onClick={() => navigate('/login')}
                className='bg-[#F4C430] text-[#10284e] hover:bg-[#FFD700] p-3 px-6 rounded-lg text-lg font-semibold'
              >
                Get Started
              </button>
            </div>
          </div>
          {/* Image */}
          <img
            src={Newton}
            alt='Newton'
            className='max-h-[200px] max-w-[200px] m-4'
          />
        </div>
      </main>
    </>
  );
};

export default Starting;



