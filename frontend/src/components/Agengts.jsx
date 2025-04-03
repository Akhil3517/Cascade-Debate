// import React, { useState } from 'react';
// import Newton from '../assets/Newton.jpg';
// import Genghis from '../assets/Genghis.jpg';
// import Eintein from '../assets/Eintein.jpg';
// import Galileo from '../assets/Galileo.jpg';

// const Agents = () => {
//   const [selectedCharacter, setSelectedCharacter] = useState(Newton); // Default character

//   const characters = [
//     { name: 'Eintein', image: Eintein },
//     { name: 'Genghis', image: Genghis },
//     { name: 'Eintein2', image: Eintein },
//     { name: 'Genghis2', image: Genghis },
//     { name: 'Eintein3', image: Eintein },
//     { name: 'Galileo', image: Galileo },
//     { name: 'Newton', image: Newton },
//     { name: 'Eintein4', image: Eintein },
//     { name: 'Newton2', image: Newton },
//     { name: 'Galileo2', image: Galileo },
//   ];

//   const handleCharacterClick = (character) => {
//     setSelectedCharacter(character.image);
//   };

//   return (
//     <div className="flex flex-col items-center bg-[#0A1931] min-h-screen p-8">
//       <h1 className="text-5xl md:text-6xl font-extrabold text-[#F4C430] mb-8 tracking-wide uppercase">
//         Choose Your Character
//       </h1>

//       <div className="bg-[#CD7F32] p-6 rounded-3xl shadow-2xl w-full max-w-4xl">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
//           {characters.map((character, index) => (
//             <button
//               key={index}
//               className="p-3 transition-transform duration-300 hover:scale-110 focus:outline-none"
//               onClick={() => handleCharacterClick(character)}
//             >
//               <img
//                 src={character.image}
//                 alt={character.name}
//                 className="w-24 h-24 rounded-xl shadow-lg border-2 border-[#F4C430]"
//               />
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="flex flex-col md:flex-row items-center bg-[#F5F5DC] p-8 rounded-3xl mt-8 shadow-2xl w-full max-w-4xl">
//         <p className="flex-1 text-lg md:text-xl font-medium text-gray-800 mb-6 md:mb-0">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, iusto?
//         </p>
//         <img
//           src={selectedCharacter}
//           alt="Selected Character"
//           className="w-24 h-24 rounded-xl shadow-lg mx-0 md:mx-6 border-2 border-[#CD7F32]"
//         />
//         <button className="bg-[#CD7F32] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#A55D20] transition-colors font-semibold">
//           Select Character
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Agents;

import React, { useState } from 'react';
import Newton from '../assets/Newton.jpg';
import Genghis from '../assets/Genghis.jpg';
import Eintein from '../assets/Eintein.jpg';
import Galileo from '../assets/Galileo.jpg';

const Agents = () => {
  const [selectedCharacter, setSelectedCharacter] = useState({
    name: 'Newton',
    image: Newton,
    description:
      'Sir Isaac Newton, a key figure in the scientific revolution, formulated the laws of motion and universal gravitation.',
  });

  const characters = [
    {
      name: 'Eintein',
      image: Eintein,
      description:
        'Albert Einstein, the genius behind the theory of relativity, revolutionized our understanding of space, time, and gravity.',
    },
    {
      name: 'Genghis',
      image: Genghis,
      description:
        'Genghis Khan, the founder of the Mongol Empire, was a formidable military leader and strategist.',
    },
    {
      name: 'Eintein2',
      image: Eintein,
      description:
        'Albert Einstein, the genius behind the theory of relativity, revolutionized our understanding of space, time, and gravity.',
    },
    {
      name: 'Genghis2',
      image: Genghis,
      description:
        'Genghis Khan, the founder of the Mongol Empire, was a formidable military leader and strategist.',
    },
    {
      name: 'Eintein3',
      image: Eintein,
      description:
        'Albert Einstein, the genius behind the theory of relativity, revolutionized our understanding of space, time, and gravity.',
    },
    {
      name: 'Galileo',
      image: Galileo,
      description:
        'Galileo Galilei, an astronomer and physicist, made groundbreaking observations that supported the heliocentric model.',
    },
    {
      name: 'Newton',
      image: Newton,
      description:
        'Sir Isaac Newton, a key figure in the scientific revolution, formulated the laws of motion and universal gravitation.',
    },
    {
      name: 'Eintein4',
      image: Eintein,
      description:
        'Albert Einstein, the genius behind the theory of relativity, revolutionized our understanding of space, time, and gravity.',
    },
    {
      name: 'Newton2',
      image: Newton,
      description:
        'Sir Isaac Newton, a key figure in the scientific revolution, formulated the laws of motion and universal gravitation.',
    },
    {
      name: 'Galileo2',
      image: Galileo,
      description:
        'Galileo Galilei, an astronomer and physicist, made groundbreaking observations that supported the heliocentric model.',
    },
  ];

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  return (
    <div className="flex flex-col items-center bg-[#0A1931] min-h-screen p-8">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#F4C430] mb-8 tracking-wide uppercase">
        Choose Your Character
      </h1>

      <div className="bg-[#CD7F32] p-6 rounded-3xl shadow-2xl w-full max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {characters.map((character, index) => (
            <button
              key={index}
              className="p-3 transition-transform duration-300 hover:scale-110 focus:outline-none"
              onClick={() => handleCharacterClick(character)}
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-24 h-24 rounded-xl shadow-lg border-2 border-[#F4C430]"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center bg-[#F5F5DC] p-8 rounded-3xl mt-8 shadow-2xl w-full max-w-4xl">
        <p className="flex-1 text-lg md:text-xl font-medium text-gray-800 mb-6 md:mb-0">
          {selectedCharacter.description}
        </p>
        <img
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
          className="w-24 h-24 rounded-xl shadow-lg mx-0 md:mx-6 border-2 border-[#CD7F32]"
        />
        <button className="bg-[#CD7F32] text-white px-6 py-3 rounded-xl shadow-lg hover:bg-[#A55D20] transition-colors font-semibold">
          Select Character
        </button>
      </div>
    </div>
  );
};

export default Agents;