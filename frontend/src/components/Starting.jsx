import React from 'react';
import Newton from '../assets/Newton.jpg';

const Starting = () => {
  return (
    <>
      <header>
        <nav className='flex justify-between bg-[#0A1931] text-[#F4C430]'>
          <div className='m-5'>
            <h1 className='text-2xl'>Debate Club AI</h1>
          </div>
          <div>
            <ul className='flex justify-betweenx'>
              <li className='m-5 p-1'>
                <a href='#'>Home</a>
              </li>
              <li className='m-5 p-1'>
                <a href='#'>About</a>
              </li>
              <li className='m-5'>
                <button className='bg-[#CD7F32] text-[#F5F5DC] hover:bg-[#ff9e3e] p-1 px-3 rounded'>
                  Login
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <body style={{ margin: 0, overflow: 'hidden', height: '100vh' }}>
        <h1 className='flex justify-center p-5 text-5xl bg-[#10284e] text-[#F4C430]'>
          TIME TRAVEL DEBATE CLUB
        </h1>
        <div
          className='flex items-center bg-[#10284e] min-h-screen justify-between'
          style={{ flexDirection: 'row', height: 'calc(100vh - 150px)' }}
        >
          {/* text container */}
          <div className='flex-wrap max-w-[500px] m-5 text-[#F4C430]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            dignissimos nulla eligendi ducimus quas minima, nisi pariatur
            ratione aliquam minus quos dolorum iste animi, et a maxime omnis
            est. Expedita eligendi veritatis hic? Iure reiciendis quaerat nemo
            ratione deserunt, hic ullam quidem nobis. Quam fugiat possimus
            ducimus voluptates, similique consequatur?
          </div>
          {/* this will contain an img */}
          <div className='flex'>
            <img
              src={Newton}
              alt='img'
              style={{ maxHeight: '200px', maxWidth: '200px' }}
              className='m-[50px] space-x-11'
            />
          </div>
        </div>
      </body>
    </>
  );
};

export default Starting;
