// pages/portfolio.tsx
import React, { useState } from 'react';
import FlipCard from '../component/FlipCard';

const projects = [
  {
    title: 'Domposer',
    description: 'Description of Domposer.',
    details: 'Detailed information about Domposer.',
  },
  {
    title: 'Bay.js',
    description: 'Description of Bay.js.',
    details: 'Detailed information about Bay.js.',
  },
  {
    title: 'Cookiemunch',
    description: 'Description of Cookiemunch.',
    details: 'Detailed information about Cookiemunch.',
  },
  // Add more projects as needed
];

const Portfolio: React.FC = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen py-4 px-2 sm:px-4 bg-[#5b5c60]">
      {/* <div className="w-full flex justify-center items-center px-2 sm:px-4"> */}
        <FlipCard
          title={projects[selectedProjectIndex].title}
          description={projects[selectedProjectIndex].description}
          details={projects[selectedProjectIndex].details}
        />
      {/* </div> */}
    </div>
  );
};

export default Portfolio;
