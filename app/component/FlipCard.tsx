import React, { Fragment, useState } from "react";
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

const projects = [
  {
    title: "Mykare",
    description: "Description of Domposer.",
    imageSrc:
      "https://play-lh.googleusercontent.com/Q0U4q2oN9Vio5sxuMv23yrCmhebKRaoFrK1P0URK22gdNpJ_FPzdi3ElGbKSfD2T6A=w832-h470-rw",
    playStore:
      "https://play.google.com/store/apps/details?id=com.mykare.mykare&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/mykare/id6578440951",
    details:
      "MyKare is your comprehensive companion for managing and tracking your healthcare journey. Designed to simplify healthcare management, MyKare allows patients to monitor their lead status stage by stage, ensuring a smooth and informed experience.",
  },
  {
    title: "Karemitra",
    description: "Description of Domposer.",
    imageSrc:
      "https://play-lh.googleusercontent.com/pobDHyVoZQE9aJos2wcdXWSRL1U4c-MV_0flC7mye_4w6pkJB6gLA2i5OurgyBOc8uLB=w832-h470-rw",
    playStore:
      "https://play.google.com/store/apps/details?id=com.mykare.karemitra&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/karemitra/id6480199168",
    details:
      "In a world where access to quality healthcare can often come at a steep price, KareMitra stands out as a beacon of hope, offering a revolutionary platform that empowers individuals to explore affordable surgical options without compromising on quality. With KareMitra, navigating the complex landscape of healthcare has never been easier or more rewarding.",
  },
  {
    title: "Kareflow",
    description: "Description of Bay.js.",
    imageSrc:
      "https://play-lh.googleusercontent.com/QAUPZA8-8tNKoWzBM_RmaYyrqadNoLXpNPFrfqwLU7-K-LAlDMq5Uwqvh67OHfLdmxY=w832-h470-rw",
    playStore:
      "https://play.google.com/store/apps/details?id=com.mykare.crm&pcampaignid=web_share",
    appStore: "",
    details:
      "KareFlow is an advanced healthcare CRM app geared to track patient flows with ease. Manage patient flows with customised tags and statuses, organize your feed with advanced filters, and add comments for detailed case insights to follow up with patients efficiently and streamline patient flow from onboarding to surgery. With a user-friendly interface and personalized dashboards, tracking incoming patients and managing prospects effectively are intuitive and efficient.",
  },
  {
    title: "Karebuddy",
    description: "Description of Cookiemunch.",
    imageSrc:
      "https://play-lh.googleusercontent.com/qtJ2GTz_NbdWZm6L2F5GIWmDqyqmYfczdhIpUnWmOuI1hg9YablEj7XWWplQLxwGCkY4=w832-h470-rw",
    playStore:
      "https://play.google.com/store/apps/details?id=com.mykare.buddy&pcampaignid=web_share",
    appStore: "https://apps.apple.com/in/app/kare-buddy/id6449086925",
    details:
      "Be the ideal buddy to a patient by helping them have the most convenient medical journey from the moment they step into the hospital till discharge. An extensive patient data collection tool used to track their journey from appointment to surgery to further care and discharge. Easy to navigate interface to track multiple patients' treatment status and for quick daily updates.",
  },
  // Add more projects as needed
];

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
      <Navbar currentSection={currentSection} handleClick={handleClick} />
      <div className=" h-[100vh] bg-black text-white rounded-[25px] border-[2px] border-[#7c7d81] cursor-pointer flex flex-col justify-center items-start p-6 md:p-8 space-y-4">
        {currentSection === "Home" && <Home />}
        {currentSection === "About Me" && (
          <div className=" py-5 mt-[70px] mx-auto overflow-scroll">
            {/* <h2 className="text-3xl font-bold mb-8 text-center">Myself</h2> */}
            <p className="text-sm text-center md:text-lg">
              I am a versatile mobile app and web developer with expertise in
              Android, Java, React Native, Flutter, and web technologies.
              Skilled in creating user-friendly, high-quality applications and
              websites, I have experience with CMS platforms and cross-platform
              solutions. My focus is on delivering efficient, innovative digital
              experiences tailored to client needs. Let's collaborate to bring
              your ideas to life with seamless and engaging solutions.
            </p>
            <Skills />
          </div>
        )}
        {currentSection === "Portfolio" && (
          <>
            {/* <h1 className="font-bold text-[20px]">Projects</h1> */}
            <div className="flex flex-wrap mt-[70px] mb-[70px] overflow-scroll gap-2 justify-center items-center">
              {projects.map((val, index) => (
                <Cards playstore={val.playStore} appStore={val.appStore}
                  key={index} description={val.description} imageSrc={val.imageSrc} title={val.title} 
                />
              ))}
            </div>
          </>
        )}
        {currentSection === "Contact" && (
          <>
          <div className="mt-[70px] flex-col mb-[70px] mx-auto overflow-scroll gap-2 justify-center">
           <h2 className="text-2xl font-bold mb-4">Feel Free to Contact</h2>
            <ContactForm />
            </div>
          </>
        )}
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-l-2 border-r-2 border-white rounded-b-[20px] text-white flex justify-around items-center py-3 md:hidden">
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
      <Navbar currentSection={currentSection} handleClick={handleClick} />
      <div className=" h-[100vh] bg-black text-white rounded-[25px] border-[2px] border-[#7c7d81] cursor-pointer flex flex-col justify-center items-start p-6 md:p-8 space-y-4">
        {currentSection === "Home" && <Home />}
        {currentSection === "About Me" && (
          <div className=" py-5 mt-[70px] mx-auto overflow-scroll">
            {/* <h2 className="text-3xl font-bold mb-8 text-center">Myself</h2> */}
            <p className="text-sm text-center md:text-lg">
              I am a versatile mobile app and web developer with expertise in
              Android, Java, React Native, Flutter, and web technologies.
              Skilled in creating user-friendly, high-quality applications and
              websites, I have experience with CMS platforms and cross-platform
              solutions. My focus is on delivering efficient, innovative digital
              experiences tailored to client needs. Let's collaborate to bring
              your ideas to life with seamless and engaging solutions.
            </p>
            <Skills />
          </div>
        )}
        {currentSection === "Portfolio" && (
          <>
            {/* <h1 className="font-bold text-[20px]">Projects</h1> */}
            <div className="flex flex-wrap mt-[70px] mb-[70px] overflow-scroll gap-2 justify-center items-center">
              {projects.map((val, index) => (
                <Cards playstore={val.playStore} appStore={val.appStore}
                  key={index} description={val.description} imageSrc={val.imageSrc} title={val.title} 
                />
              ))}
            </div>
          </>
        )}
      {currentSection === "Contact" && (
          <>
          <div className="mt-[70px] w-full flex-col mb-[70px] mx-auto overflow-scroll gap-2 justify-center">
           <h2 className="text-2xl font-bold mb-4">Feel Free to Contact</h2>
            <ContactForm />
            </div>
          </>
        )}
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-l-2 border-r-2 border-white rounded-b-[20px] text-white flex justify-around items-center py-3 md:hidden">
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
      containerClassName="h-[100vh]"
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
