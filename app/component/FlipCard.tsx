import React, { Fragment, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import AnimatedTextCharacter from './AnimationTextCharector';
import Github from "../assets/github-svgrepo-com.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";
import GMail from "../assets/gmail-svgrepo-com.svg";

interface FlipCardProps {
  title: string;
  description: string;
  details: string;
}

const projects = [
  {
    title: 'Mykare',
    description: 'Description of Domposer.',
    details: 'MyKare is your comprehensive companion for managing and tracking your healthcare journey. Designed to simplify healthcare management, MyKare allows patients to monitor their lead status stage by stage, ensuring a smooth and informed experience.',
  },
  {
    title: 'Karemitra',
    description: 'Description of Domposer.',
    details: 'In a world where access to quality healthcare can often come at a steep price, KareMitra stands out as a beacon of hope, offering a revolutionary platform that empowers individuals to explore affordable surgical options without compromising on quality. With KareMitra, navigating the complex landscape of healthcare has never been easier or more rewarding.',
  },
  {
    title: 'Kareflow',
    description: 'Description of Bay.js.',
    details: 'KareFlow is an advanced healthcare CRM app geared to track patient flows with ease. Manage patient flows with customised tags and statuses, organize your feed with advanced filters, and add comments for detailed case insights to follow up with patients efficiently and streamline patient flow from onboarding to surgery. With a user-friendly interface and personalized dashboards, tracking incoming patients and managing prospects effectively are intuitive and efficient.',
  },
  {
    title: 'Karebuddy',
    description: 'Description of Cookiemunch.',
    details: "Be the ideal buddy to a patient by helping them have the most convenient medical journey from the moment they step into the hospital till discharge. An extensive patient data collection tool used to track their journey from appointment to surgery to further care and discharge. Easy to navigate interface to track multiple patients' treatment status and for quick daily updates.",
  },
  // Add more projects as needed
];

const FlipCard: React.FC<FlipCardProps> = ({ title, description, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedProjectIndex(index);
    setIsFlipped(true);
  };

  const handleBackClick = () => {
    setIsFlipped(false);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front Side */} 
      <Fragment>
      <div className='flex-[1] top-3 px-5 flex absolute w-full justify-between items-center' >
            <div className='flex-[3] ' ><h1 className='text-[30px] text-white font-mono' >JK</h1></div>
          <div className='flex flex-[5] justify-end gap-2 ' >
          <LinkedIn height={25} width={25} fill={"#fff"} />
           <Github height={25} width={25} fill={"#fff"} />
           <GMail height={25} width={25} fill={"#fff"} />
          </div>
        </div>
      <div
        className="w-full max-w-md md:max-w-lg lg:max-w-5xl min-h-[500px] max-h-fit bg-black text-white rounded-[25px] border-[2px] border-[#7c7d81] cursor-pointer flex flex-col justify-center items-start p-6 md:p-8 space-y-4"
      >
      
        <div className="flex items-center space-x-4">
          {/* <div className="w-12 h-12 bg-gray-300 rounded-full" /> Logo Placeholder */}
          <h1 className="text-3xl md:text-4xl font-bold">
          <AnimatedTextCharacter text="Welcome." />
          </h1>
        </div>
        <p className="text-sm md:text-lg">
          {"My name is Jithin Krishna, I'm a software developer based in Kochi. I have developed many types of front-ends from well-known DJ applications to E-commerce booking platforms."}
        </p>
        <p className="text-xs md:text-sm">
         {" I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces, and intuitively implemented UX."}
        </p>
        <h1 className='italic underline' onClick={()=>handleClick(0)} >Click to see my projects</h1>
        <p className="text-gray-400 text-xs">@ 2024 [yourwebsite].com</p>
      </div>
      </Fragment>

      {/* Back Side */}
      <div
        className="lg:min-w-[700px] sm:min-w-[300px] max-w-md md:max-w-lg lg:max-w-5xl min-h-[500px]  max-h-fit bg-black text-white rounded-[25px] border-[2px] border-[#7c7d81]  flex flex-col justify-center items-start p-6 md:p-8 space-y-4"
      >
        <h1 className="font-bold text-[20px]">Projects</h1>
        <div className='flex gap-2 items-center' >
          {projects.map((val, index) => (
            <h3 key={index} onClick={() => handleClick(index)} className="text-[16px] font-thin cursor-pointer">
              {val.title} 
            </h3>
          ))}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Project Detail</h2>
        <ul className="space-y-2">
          <li className="text-base md:text-lg">
            <a href="#" className="text-blue-500 hover:underline">
              {projects[selectedProjectIndex].title}
            </a>
          </li>
          <p className="text-sm md:text-base">{projects[selectedProjectIndex].details}</p>
        </ul>
        <button
          onClick={handleBackClick}
          className="mt-4 px-4 py-2 bg-white text-black rounded-lg"
        >
          Back to Home
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
