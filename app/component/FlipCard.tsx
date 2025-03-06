'use client';
import React, { Fragment, useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { motion } from 'framer-motion';
import Skills from '../pages/Skills';
import ContactForm from '../pages/ContactForm';
import Cards from './Card';
import AnimatedTextCharacter from './AnimationTextCharector';
import Navbar from './NavBar';

// Define FlipCard props interface
interface FlipCardProps {
  title?: string;
  description?: string;
  details?: string;
}

// Section content components
const HomeSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col gap-3 items-center text-center space-y-4"
  >
    <h1 className="text-3xl md:text-4xl font-bold">
      <AnimatedTextCharacter fontSize="3rem" text="Welcome." />
    </h1>
    <p className="text-sm md:text-lg max-w-2xl">
      Hi, I'm Jithin Krishna, a Senior Software Developer based in Kochi. With expertise in Java, React Native, and Flutter, I craft innovative mobile and web solutions that drive success and delight users.
    </p>
  </motion.div>
);

const AboutSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="py-5 overflow-auto h-[70vh] text-center space-y-6"
  >
    <p className="text-sm md:text-lg max-w-2xl mx-auto">
      I'm a versatile developer skilled in Android, Java, React Native, Flutter, and web technologies. I focus on creating seamless, user-friendly digital experiences tailored to client needs.
    </p>
    <Skills />
  </motion.div>
);

const PortfolioSection = ({ sheetData }: { sheetData: any[] }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="flex flex-wrap gap-4 justify-center h-[60vh] mb-10 overflow-scroll"
  >
    {sheetData.length > 0 ? (
      sheetData.map((val: any, index: number) => (
        <Cards
          key={index}
          playstore={val?.properties?.playStore?.url}
          appStore={val?.properties?.appStore?.url}
          description={val.description}
          imageSrc={val.properties?.imageSrc?.url}
          title={val.properties?.title?.rich_text[0]?.plain_text}
        />
      ))
    ) : (
      <p className="text-center text-gray-400">No projects available.</p>
    )}
  </motion.div>
);

const ContactSection = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="w-full py-16 overflow-auto"
  >
    <h2 className="text-2xl font-bold text-center mb-6">Feel Free to Contact</h2>
    <div className="w-11/12 md:w-3/5 mx-auto">
      <ContactForm />
    </div>
  </motion.div>
);

// Main FlipCard Component
const FlipCard: React.FC<FlipCardProps> = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentSection, setCurrentSection] = useState('Home');
  const [sheetData, setSheetData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch portfolio data when section changes to Portfolio
  useEffect(() => {
    if (currentSection === 'Portfolio') {
      setIsLoading(true);
      setError(null); // Reset error state
      fetch('/api/getNotionData')
        .then((response) => {
          if (!response.ok) throw new Error('Failed to fetch portfolio data');
          return response.json();
        })
        .then((data) => {
          setSheetData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }
  }, [currentSection]);

  const handleSectionChange = (section: string) => {
    if (currentSection !== section) {
      setIsFlipped((prev) => !prev);
      setTimeout(() => setCurrentSection(section), 300); // Matches flip animation duration
    }
  };

  const handleBackClick = () => {
    setIsFlipped((prev) => !prev);
    setTimeout(() => setCurrentSection('Home'), 300);
  };

  const SectionContent = () => (
    <Fragment>
      <Navbar
        handleBackClick={handleBackClick}
        currentSection={currentSection}
        handleClick={handleSectionChange}
      />
      <motion.div
        className="h-[90vh] w-full bg-black text-white rounded-3xl border-2 border-gray-600 p-6 md:p-8 flex flex-col justify-center items-center relative"
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {currentSection === 'Home' && <HomeSection />}
        {currentSection === 'About Me' && <AboutSection />}
        {currentSection === 'Portfolio' && (
          <div className="w-full">
            {isLoading && <p className="text-center text-gray-400">Loading portfolio...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {!isLoading && !error && <PortfolioSection sheetData={sheetData} />}
          </div>
        )}
        {currentSection === 'Contact' && <ContactSection />}
        <p className="text-gray-400 text-xs absolute bottom-4">
          © 2024 jithnkrishna.com
        </p>
      </motion.div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-x-2 border-gray-600 rounded-b-2xl text-white flex justify-around py-3 md:hidden">
        {['Home', 'About Me', 'Portfolio', 'Contact'].map((section) => (
          <motion.button
            key={section}
            className={`text-sm font-medium transition-colors ${
              currentSection === section ? 'text-yellow-400' : 'text-white hover:text-yellow-300'
            }`}
            onClick={() => handleSectionChange(section)}
            whileTap={{ scale: 0.95 }}
          >
            {section}
          </motion.button>
        ))}
      </div>
    </Fragment>
  );

  return (
    <div className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative blob-container bg-black/10 backdrop-blur-md">
    <ReactCardFlip
      containerClassName="w-full max-w-4xl mx-auto"
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
      <SectionContent />
      <SectionContent />
    </ReactCardFlip>
    <div className="blob-background" />
    </div>
  );
};

export default FlipCard;