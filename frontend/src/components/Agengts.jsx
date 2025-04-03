import React, { useState } from 'react';
import Newton from '../assets/Newton.jpg';
import Genghis from '../assets/Genghis.jpg';
import Eintein from '../assets/Eintein.jpg';
import Galileo from '../assets/Galileo.jpg';
import Abraham from '../assets/Abraham.jpg';
import Albert from '../assets/Albert.jpg';
import Bean from '../assets/Bean.jpg';
import Khan from '../assets/Khan.jpg';
import Mahatma from '../assets/Mahatma.jpg';
import Shivaji from '../assets/Shivaji.jpg';
import Issac from '../assets/Issac.jpg';
import Tata from '../assets/Tata.jpg';
import Gelilio from '../assets/Gelilio.jpg';
import Charlie from '../assets/Charlie.jpg';

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
      image: Albert,
      description:
        'Albert Einstein, the genius behind the theory of relativity, revolutionized our understanding of space, time, and gravity.',
    },
    {
      name: 'Genghis Khan',
      image: Genghis,
      description:
        'Genghis Khan, the founder of the Mongol Empire, was a formidable military leader and strategist.',
    },
    {
      name: 'Abraham',
      image: Abraham,
      description:
        'Abraham Lincoln was the 16th U.S. president who led during the Civil War, abolished slavery, and promoted unity, democracy,and equality.',
    },
    {
      name: 'Mr.Bean',
      image: Bean,
      description:
        'Mr. Bean, played by Rowan Atkinson, is a hilarious, clumsy, and silent character known for his quirky antics, comedy, and misadventures worldwide.',
    },
    {
      name: 'Mahatma Gandhi',
      image: Mahatma,
      description:
        'Mahatma Gandhi was an Indian freedom leader who advocated nonviolence, civil disobedience, and truth, leading India to independence from British rule.',
    },
    {
      name: 'Chatrapati Shivaji',
      image: Shivaji,
      description:
        'Chhatrapati Shivaji Maharaj was a brave Maratha warrior-king, known for his military tactics, fort strategy, administration, and establishing Hindavi Swarajya.',
    },
    {
      name: 'Newton',
      image: Issac,
      description:
        'Sir Isaac Newton, a key figure in the scientific revolution, formulated the laws of motion and universal gravitation.',
    },
    {
      name: 'Ratan Tata',
      image: Tata,
      description:
        'Ratan Tata is an Indian industrialist, philanthropist, and former chairman of Tata Group, known for innovation, leadership, and social impact.',
    },
    {
      name: 'Charlie Chaplin',
      image: Charlie,
      description:
        'Charlie Chaplin was a legendary comedian, filmmaker, and actor known for his silent films, iconic Tramp character, and timeless cinematic humor.',
    },
    {
      name: 'Galileo',
      image: Gelilio,
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