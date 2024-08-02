import React, { Fragment, useState } from "react";
import ReactCardFlip from "react-card-flip";
import Github from "../assets/github-svgrepo-com.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";
import GMail from "../assets/gmail-svgrepo-com.svg";
import Link from "next/link";
import Playstore from "../assets/playstore-svgrepo-com.svg";
import Appstore from "../assets/appstore-svgrepo-com.svg";
import AnimatedTextCharacter from "./AnimationTextCharector";
import MykareBanner from '../assets/mykare.webp';
import Card from "./Card";

interface FlipCardProps {
  title: string;
  description: string;
  details: string;
}

const projects = [
  {
    title: "Mykare",
    description: "Description of Domposer.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.mykare.mykare&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/mykare/id6578440951",
    details:
      "MyKare is your comprehensive companion for managing and tracking your healthcare journey. Designed to simplify healthcare management, MyKare allows patients to monitor their lead status stage by stage, ensuring a smooth and informed experience.",
  },
  {
    title: "Karemitra",
    description: "Description of Domposer.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.mykare.karemitra&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/karemitra/id6480199168",
    details:
      "In a world where access to quality healthcare can often come at a steep price, KareMitra stands out as a beacon of hope, offering a revolutionary platform that empowers individuals to explore affordable surgical options without compromising on quality. With KareMitra, navigating the complex landscape of healthcare has never been easier or more rewarding.",
  },
  {
    title: "Kareflow",
    description: "Description of Bay.js.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.mykare.crm&pcampaignid=web_share",
    appStore: "",
    details:
      "KareFlow is an advanced healthcare CRM app geared to track patient flows with ease. Manage patient flows with customised tags and statuses, organize your feed with advanced filters, and add comments for detailed case insights to follow up with patients efficiently and streamline patient flow from onboarding to surgery. With a user-friendly interface and personalized dashboards, tracking incoming patients and managing prospects effectively are intuitive and efficient.",
  },
  {
    title: "Karebuddy",
    description: "Description of Cookiemunch.",
    playStore:
      "https://play.google.com/store/apps/details?id=com.mykare.buddy&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/kare-buddy/id6449086925",
    details:
      "Be the ideal buddy to a patient by helping them have the most convenient medical journey from the moment they step into the hospital till discharge. An extensive patient data collection tool used to track their journey from appointment to surgery to further care and discharge. Easy to navigate interface to track multiple patients' treatment status and for quick daily updates.",
  },
  // Add more projects as needed
];

const FlipCard: React.FC<FlipCardProps> = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState("Home");

  const handleClick = (section: string) => {
    if (currentSection !== section) {
      setIsFlipped((prevState) => !prevState);
      setTimeout(() => {
        setCurrentSection(section);
      }, 300); // Adjust the timeout duration to match the flip animation duration
    }
  };

  const handleBackClick = () => {
    setIsFlipped((prevState) => !prevState);
    setTimeout(() => {
      setCurrentSection("Home");
    }, 300); // Adjust the timeout duration to match the flip animation duration
  };

  const FrontSide = () => (
    <Fragment>
      <div className="flex-[1] top-3 px-5 flex absolute w-full justify-between items-center">
        <div className="flex-[3] ">
          <h1 className="text-[30px] text-white font-mono">JK</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          {["Home", "About", "Portfolio", "Contact"].map((section) => (
            <h1
              key={section}
              className=" text-white cursor-pointer"
              onClick={() => handleClick(section)}
            >
              {section}
            </h1>
          ))}
        </div>
        <div className="flex flex-[3] justify-end gap-2 ">
          <Link href="https://www.linkedin.com/in/jithin-krishna-078680177/">
            <LinkedIn height={25} width={25} fill={"#fff"} />
          </Link>
          <Link href="https://github.com/Jithinkrishnapu">
            <Github height={25} width={25} fill={"#fff"} />
          </Link>
          <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqLRrfLdfRKPKgtHtJHKrfFftscMPVrDFhXXPsXpjfKVgPQVgQWXDxsKppfWtlSfkkvjB">
            {" "}
            <GMail height={25} width={25} fill={"#fff"} />
          </Link>
        </div>
      </div>
  
      <div className=" h-[85vh] bg-black text-white rounded-[25px] border-[2px] border-[#7c7d81] cursor-pointer flex flex-col justify-center items-start p-6 md:p-8 space-y-4">
        {currentSection === "Home" && (
          <>
            <div className="flex items-center space-x-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                <AnimatedTextCharacter text="Welcome." />
              </h1>
            </div>
            <p className="text-sm md:text-lg">
              {
                "Hi, I'm Jithin Krishna, a Senior Software Developer based in Kochi. With a strong background in mobile and web development, My expertise in Java, React Native, and Flutter allows me to deliver cutting-edge solutions that meet user needs and drive business success. I thrive on collaboration and am dedicated to pushing the boundaries of technology to create transformative digital experiences. "
              }
            </p>
            <p className="text-gray-400 text-xs">@ 2024 jithnkrishna.com</p>
          </>
        )}
        {currentSection === "About" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold">About</h1>
            <p className="text-sm md:text-lg">
              I am a Senior Software Developer with a strong background in
              mobile and web development.
            </p>
          </>
        )}
        {currentSection === "Portfolio" && (
       <>
       <h1 className="font-bold text-[20px]">Projects</h1>
       <div className="flex overflow-scroll   gap-2 items-center">
         {projects.map((val, index) => (
         <Card key={index} description={val.description} imageSrc={MykareBanner} title={val.title}  />
         ))} 
         </div>
     </>
        )}
        {currentSection === "Contact" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
            <p className="text-sm md:text-lg">
              You can reach me via LinkedIn, GitHub, or GMail.
            </p>
          </>
        )}
      </div>
  
      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-l-2 border-r-2 border-white rounded-b-[20px] text-white flex justify-around items-center py-2 md:hidden">
        {["Home", "About", "Portfolio", "Contact"].map((section) => (
          <button
            key={section}
            className={`flex-1 rounded-lg text-center py-2 ${
              currentSection === section ? "bg-gray-700" : ""
            }`}
            onClick={() => handleClick(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </Fragment>
  );
  
  const BackSide = () => (
    <Fragment>
      <div className="flex-[1] top-3 px-5 flex absolute w-full justify-between items-center">
        <div className="flex-[3] ">
          <h1 className="text-[30px] text-white font-mono">JK</h1>
        </div>
        <div className="hidden md:flex space-x-4">
          {["Home", "About", "Portfolio", "Contact"].map((section) => (
            <h1
              key={section}
              className="text-white cursor-pointer"
              onClick={() => handleClick(section)}
            >
              {section}
            </h1>
          ))}
        </div>
        <div className="flex flex-[3] justify-end gap-2 ">
          <Link href="https://www.linkedin.com/in/jithin-krishna-078680177/">
            <LinkedIn height={25} width={25} fill={"#fff"} />
          </Link>
          <Link href="https://github.com/Jithinkrishnapu">
            <Github height={25} width={25} fill={"#fff"} />
          </Link>
          <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqLRrfLdfRKPKgtHtJHKrfFftscMPVrDFhXXPsXpjfKVgPQVgQWXDxsKppfWtlSfkkvjB">
            {" "}
            <GMail height={25} width={25} fill={"#fff"} />
          </Link>
        </div>
      </div>
      <div className=" h-[85vh] bg-black text-white rounded-[25px] border-[2px] border-[#7c7d81] cursor-pointer flex flex-col justify-center items-start p-6 md:p-8 space-y-4">
        {currentSection === "Home" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold">Home</h1>
            <p className="text-sm md:text-lg">
              Welcome to my portfolio. Click on the menu items to explore
              more.
            </p>
          </>
        )}
        {currentSection === "About" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold">About</h1>
            <p className="text-sm md:text-lg">
              I am a Senior Software Developer with a strong background in
              mobile and web development.
            </p>
          </>
        )}
        {currentSection === "Portfolio" && (
        <div className="flex-1 justify-center overflow-scroll items-center px-5" >
          <br/>
          <br/>
        {/* <h1 className="font-bold text-[20px]">Projects</h1> */}
        <div className="flex overflow-scroll flex-wrap  gap-5 items-center">
          {projects.map((val, index) => (
          <Card key={index} description={val.description} imageSrc={MykareBanner} title={val.title}  />
          ))} 
          </div>
          <br/>
          <br/>
      </div>
        )}
        {currentSection === "Contact" && (
          <>
            <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
            <p className="text-sm md:text-lg">
              You can reach me via LinkedIn, GitHub, or GMail.
            </p>
          </>
        )}
  
      </div>
  
      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-l-2 border-r-2 border-white rounded-b-[20px] text-white flex justify-around items-center py-2 md:hidden">
        {["Home", "About", "Portfolio", "Contact"].map((section) => (
          <button
            key={section}
            className={`flex-1 rounded-lg text-center py-2 ${
              currentSection === section ? "bg-gray-700" : ""
            }`}
            onClick={() => handleClick(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </Fragment>
  );
  
  return (
    <ReactCardFlip
      containerClassName="w-full"
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      {/* Front Side */}
      <FrontSide />
  
      {/* Back Side */}
      <BackSide />
    </ReactCardFlip>
  );
  
};

export default FlipCard;
