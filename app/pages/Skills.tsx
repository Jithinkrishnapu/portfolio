import React from "react";
import AnimatedTextWord from "../component/AnimationTextWord";
import JavaScript from "../assets/skills/javascript-svgrepo-com.svg";
import TypeScript from "../assets/skills/typescript-svgrepo-com.svg";
import Java from "../assets/skills/java-svgrepo-com.svg";
import ReactIcon from "../assets/skills/reactjs-svgrepo-com.svg";
import ReactNative from "../assets/skills/react-svgrepo-com.svg";
import Flutter from "../assets/skills/flutter-svgrepo-com.svg";
import NextJs from "../assets/skills/next-dot-js-svgrepo-com.svg";
import TailwindCSS from "../assets/skills/tailwind-svgrepo-com.svg";
import NodeJs from "../assets/skills/node-js-svgrepo-com.svg";
import SpringBoot from "../assets/skills/spring-icon-svgrepo-com.svg";
import Express from "../assets/skills/express-svgrepo-com.svg";
import MongoDB from "../assets/skills/mongodb-svgrepo-com.svg";
import PostgresQL from "../assets/skills/pgsql-svgrepo-com.svg";

const skills = [
  { skill: "JavaScript", icon: JavaScript },
  { skill: "TypeScript", icon: TypeScript },
  { skill: "Java", icon: Java },
  { skill: "React", icon: ReactIcon },
  { skill: "React Native", icon: ReactNative },
  { skill: "Flutter", icon: Flutter },
  { skill: "Next.js", icon: NextJs },
  { skill: "Tailwind CSS", icon: TailwindCSS },
  { skill: "Node.js", icon: NodeJs },
  { skill: "Spring Boot", icon: SpringBoot },
  { skill: "Express", icon: Express },
  { skill: "MongoDB", icon: MongoDB },
  { skill: "PostgresQL", icon: PostgresQL },
];

const Skills: React.FC = () => {
  return (
    <section className=" text-white py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Technology</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((val) => (
            <div
              key={val.skill}
              className="m-2 md:p-[20px] p-2 flex gap-2 shadow-lg transform hover:scale-110 transition-transform duration-300"
            >
              <val.icon height={20} width={20} />
              <h3 className="text-[16px] font-semibold">
                <AnimatedTextWord text={val.skill} />
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
