'use client'
import React, { Fragment, useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import Github from "../assets/github-svgrepo-com.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";
import GMail from "../assets/gmail-svgrepo-com.svg";
import Link from "next/link";
import AnimatedTextCharacter from "./AnimationTextCharector";
import MykareBanner from "../assets/mykare.webp";
import Cards from "./Card";
import Navbar from "./NavBar";
import Skills from "../pages/Skills";
import ContactForm from "../pages/ContactForm";

interface FlipCardProps {
  title: string;
  description: string;
  details: string;
}

const Home = () => {
  return (
    <div className=" md:w-[70%] m-auto flex-col items-center ">
      <div className="flex items-center mb-5 justify-center space-x-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          <AnimatedTextCharacter fontSize="3rem" text="Welcome." />
        </h1>
      </div>
      <p className="text-sm md:text-center mb-5 md:text-lg">
        {
          "Hi, I'm Jithin Krishna, a Senior Software Developer based in Kochi. With a strong background in mobile and web development, My expertise in Java, React Native, and Flutter allows me to deliver cutting-edge solutions that meet user needs and drive business success. I thrive on collaboration and am dedicated to pushing the boundaries of technology to create transformative digital experiences. "
        }
      </p>
      <p className="text-gray-400 text-center absolute bottom-5 left-0 right-0 text-xs">
        @ 2024 jithnkrishna.com
      </p>
    </div>
  );
};

const FlipCard: React.FC<FlipCardProps> = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentSection, setCurrentSection] = useState("Home");

  const [sheetData, setSheetData] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('/api/getNotionData');
          const data = await response.json();
          console.log("data=======",data)
          setSheetData(data);
      };

      fetchData();
  }, []);


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
      <Navbar handleBackClick={handleBackClick} currentSection={currentSection} handleClick={handleClick} />
      <div className=" h-[90vh] bg-black text-white rounded-[25px] border-[2px] border-[#7c7d81] cursor-pointer flex flex-col justify-center items-start p-6 md:p-8 space-y-4">
        {currentSection === "Home" && <Home />}
        {currentSection === "About Me" && (
          <div className=" py-5 mt-[70px] mx-auto overflow-scroll">
            {/* <h2 className="text-3xl font-bold mb-8 text-center">Myself</h2> */}
            <p className="text-sm text-center md:text-lg">
             {`I am a versatile mobile app and web developer with expertise in
              Android, Java, React Native, Flutter, and web technologies.
              Skilled in creating user-friendly, high-quality applications and
              websites, I have experience with CMS platforms and cross-platform
              solutions. My focus is on delivering efficient, innovative digital
              experiences tailored to client needs. Let's collaborate to bring
              your ideas to life with seamless and engaging solutions.`}
            </p>
            <Skills />
          </div>
        )}
        {currentSection === "Portfolio" && (
          <>
            {/* <h1 className="font-bold text-[20px]">Projects</h1> */}
            <div className="flex flex-wrap mt-[70px] mb-[70px] overflow-scroll gap-2 justify-center items-center">
              {sheetData.map((val:any, index) => (
                <Cards playstore={val?.properties.playStore.url} appStore={val?.properties?.appStore?.url}
                  key={index} description={val.description} imageSrc={val.properties?.imageSrc?.url} title={val.properties?.title.rich_text[0].plain_text} 
                />
              ))}
            </div>
          </>
        )}
         {currentSection === "Contact" && (
          <div className="w-[100%] overflow-scroll py-[70px]" >
           <h2 className="text-2xl text-center font-bold mb-4">Feel Free to Contact</h2>
          <div className="mt-[70px] w-[80%] flex mb-[70px] items-center mx-auto  gap-2 justify-center">
            <ContactForm />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-l-2 border-r-2 border-[#7c7d81] rounded-b-[20px] text-white flex justify-around items-center py-3 md:hidden">
        {["Home", "About Me", "Portfolio", "Contact"].map((section) => (
          <button
            key={section}
            className={`text-white cursor-pointer transition duration-300 ${
              currentSection === section
                ? "glossy-underline text-yellow-400 transform scale-110"
                : "hover:text-yellow-300"
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
      <Navbar handleBackClick={handleBackClick} currentSection={currentSection} handleClick={handleClick} />
      <div className=" h-[90vh] bg-black text-white rounded-[25px] border-[2px] border-[#7c7d81] cursor-pointer flex flex-col justify-center items-start p-6 md:p-8 space-y-4">
        {currentSection === "Home" && <Home />}
        {currentSection === "About Me" && (
          <div className=" py-5 mt-[70px] mx-auto overflow-scroll">
            {/* <h2 className="text-3xl font-bold mb-8 text-center">Myself</h2> */}
            <p className="text-sm text-center md:text-lg">
            {`I am a versatile mobile app and web developer with expertise in
              Android, Java, React Native, Flutter, and web technologies.
              Skilled in creating user-friendly, high-quality applications and
              websites, I have experience with CMS platforms and cross-platform
              solutions. My focus is on delivering efficient, innovative digital
              experiences tailored to client needs. Let's collaborate to bring
              your ideas to life with seamless and engaging solutions.`}
            </p>
            <Skills />
          </div>
        )}
        {currentSection === "Portfolio" && (
          <>
            {/* <h1 className="font-bold text-[20px]">Projects</h1> */}
            <div className="flex flex-wrap mt-[70px] mb-[70px] overflow-scroll gap-2 justify-center items-center">
              {sheetData.map((val:any, index) => (
                <Cards playstore={val?.properties.playStore.url} appStore={val?.properties?.appStore?.url}
                  key={index} description={val.description} imageSrc={val.properties?.imageSrc?.url} title={val.properties?.title.rich_text[0].plain_text} 
                />
              ))}
            </div>
          </>
        )}
      {currentSection === "Contact" && (
          <div className="w-[100%] overflow-scroll py-[70px] " >
           <h2 className="text-2xl text-center font-bold mb-4">Feel Free to Contact</h2>
          <div className="mt-[70px] w-[80%] flex mb-[70px] items-center mx-auto  gap-2 justify-center">
            <ContactForm />
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-l-2 border-r-2 border-[#7c7d81] rounded-b-[20px] text-white flex justify-around items-center py-3 md:hidden">
        {["Home", "About Me", "Portfolio", "Contact"].map((section) => (
          <button
            key={section}
            className={`text-white cursor-pointer transition duration-300 ${
              currentSection === section
                ? "glossy-underline text-yellow-400 transform scale-110"
                : "hover:text-yellow-300"
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
