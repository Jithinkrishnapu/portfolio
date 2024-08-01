import React, { Fragment, useState } from "react";
import ReactCardFlip from "react-card-flip";
import AnimatedTextCharacter from "./AnimationTextCharector";
import Github from "../assets/github-svgrepo-com.svg";
import LinkedIn from "../assets/linkedin-svgrepo-com.svg";
import GMail from "../assets/gmail-svgrepo-com.svg";
import Link from "next/link";
import Playstore from "../assets/playstore-svgrepo-com.svg";
import Appstore from "../assets/appstore-svgrepo-com.svg";

interface FlipCardProps {
  title: string;
  description: string;
  details: string;
}

const projects = [
  {
    title: "Mykare",
    description: "Description of Domposer.",
    playStore:'https://play.google.com/store/apps/details?id=com.mykare.mykare&pcampaignid=web_share',
    appStore:'https://apps.apple.com/in/app/mykare/id6578440951',
    details:
      "MyKare is your comprehensive companion for managing and tracking your healthcare journey. Designed to simplify healthcare management, MyKare allows patients to monitor their lead status stage by stage, ensuring a smooth and informed experience.",
  },
  {
    title: "Karemitra",
    description: "Description of Domposer.",
    playStore:'https://play.google.com/store/apps/details?id=com.mykare.karemitra&pcampaignid=web_share',
    appStore:'https://apps.apple.com/in/app/karemitra/id6480199168',
    details:
      "In a world where access to quality healthcare can often come at a steep price, KareMitra stands out as a beacon of hope, offering a revolutionary platform that empowers individuals to explore affordable surgical options without compromising on quality. With KareMitra, navigating the complex landscape of healthcare has never been easier or more rewarding.",
  },
  {
    title: "Kareflow",
    description: "Description of Bay.js.",
    playStore:'https://play.google.com/store/apps/details?id=com.mykare.crm&pcampaignid=web_share',
    appStore:'',
    details:
      "KareFlow is an advanced healthcare CRM app geared to track patient flows with ease. Manage patient flows with customised tags and statuses, organize your feed with advanced filters, and add comments for detailed case insights to follow up with patients efficiently and streamline patient flow from onboarding to surgery. With a user-friendly interface and personalized dashboards, tracking incoming patients and managing prospects effectively are intuitive and efficient.",
  },
  {
    title: "Karebuddy",
    description: "Description of Cookiemunch.",
    playStore:'https://play.google.com/store/apps/details?id=com.mykare.buddy&pcampaignid=web_share',
    appStore:'https://apps.apple.com/in/app/kare-buddy/id6449086925',
    details:
      "Be the ideal buddy to a patient by helping them have the most convenient medical journey from the moment they step into the hospital till discharge. An extensive patient data collection tool used to track their journey from appointment to surgery to further care and discharge. Easy to navigate interface to track multiple patients' treatment status and for quick daily updates.",
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
        <div className="flex-[1] top-3 px-5 flex absolute w-full justify-between items-center">
          <div className="flex-[3] ">
            <h1 className="text-[30px] text-white font-mono">JK</h1>
          </div>
          <div className="flex flex-[5] justify-end gap-2 ">
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
        <div className="w-full max-w-md md:max-w-lg lg:max-w-5xl min-h-[500px] max-h-fit bg-black text-white rounded-[25px] border-[2px] border-[#7c7d81] cursor-pointer flex flex-col justify-center items-start p-6 md:p-8 space-y-4">
          <div className="flex items-center space-x-4">
            {/* <div className="w-12 h-12 bg-gray-300 rounded-full" /> Logo Placeholder */}
            <h1 className="text-3xl md:text-4xl font-bold">
              <AnimatedTextCharacter text="Welcome." />
            </h1>
          </div>
          <p className="text-sm md:text-lg">
            {
              "Hi, I'm Jithin Krishna, a Senior Software Developer based in Kochi. With a strong background in mobile and web development, I've worked on diverse projects ranging from innovative Android and iOS applications to scalable web platforms. I am passionate about crafting pixel-perfect, user-friendly interfaces and seamless user experiences. "
            }
          </p>
          <p className="text-xs md:text-sm">
            {
              "My expertise in Java, React Native, and Flutter allows me to deliver cutting-edge solutions that meet user needs and drive business success. I thrive on collaboration and am dedicated to pushing the boundaries of technology to create transformative digital experiences."
            }
          </p>
          <h1 className="italic underline" onClick={() => handleClick(0)}>
            Click to see my projects
          </h1>
          <p className="text-gray-400 text-xs">@ 2024 jithnkrishna.com</p>
        </div>
      </Fragment>

      {/* Back Side */}
      <div className="lg:min-w-[700px] sm:min-w-[300px] max-w-md md:max-w-lg lg:max-w-5xl min-h-[500px]  max-h-fit bg-black text-white rounded-[25px] border-[2px] border-[#7c7d81]  flex flex-col justify-center items-start p-6 md:p-8 space-y-4">
        <h1 className="font-bold text-[20px]">Projects</h1>
        <div className="flex gap-2 items-center">
          {projects.map((val, index) => (
            <h3
              key={index}
              onClick={() => handleClick(index)}
              className="text-[16px] font-thin cursor-pointer"
            >
              {val.title}
            </h3>
          ))}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Project Detail</h2>
        <ul className="space-y-2">
          <li className="text-base md:text-lg">
            <div className="flex gap-2 items-center " >
              <a href="#" className="text-blue-500 hover:underline">
              {projects[selectedProjectIndex].title}
            </a>
            {projects[selectedProjectIndex].playStore && <Link href={projects[selectedProjectIndex].playStore} ><Playstore height={20} width={20}/></Link> }
            {projects[selectedProjectIndex].appStore && <Link href={projects[selectedProjectIndex].appStore} ><Appstore height={20} width={20}/></Link> }
            </div>
          </li>
          <p className="text-sm md:text-base">
            {projects[selectedProjectIndex].details}
          </p>
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
