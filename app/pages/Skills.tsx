import React from 'react';
import AnimatedTextWord from '../component/AnimationTextWord';
import AnimatedTextCharacter from '../component/AnimationTextCharector';

const skills = [
  'JavaScript',
  'TypeScript',
  'Java',
  'React',
  'React Native',
  'Flutter',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Spring Boot',
  'Express',
  'MongoDB',
  'PostgresQL'
];

const Skills: React.FC = () => {
  return (
    <section className=" text-white py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">
           Skills
        </h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill) => (
            <div key={skill} className="m-4 p-4 shadow-lg transform hover:scale-110 transition-transform duration-300">
              <h3 className="text-[16px] font-semibold">
                <AnimatedTextWord text={skill} />
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
