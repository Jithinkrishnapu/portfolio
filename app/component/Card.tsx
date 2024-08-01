import Image, { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  imageSrc: StaticImageData;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image className="w-full" src={imageSrc} alt={title} width={400} height={200} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;




 {/* Back Side */}
//  <div className="lg:min-w-[700px] sm:min-w-[300px] max-w-md md:max-w-lg lg:max-w-5xl min-h-[500px]  max-h-fit bg-black text-white rounded-[25px] border-[2px] border-[#7c7d81]  flex flex-col justify-center items-start p-6 md:p-8 space-y-4">
//  <h1 className="font-bold text-[20px]">Projects</h1>
//  <div className="flex gap-2 items-center">
//    {projects.map((val, index) => (
//      <h3
//        key={index}
//        onClick={() => handleClick(index)}
//        className="text-[16px] font-thin cursor-pointer"
//      >
//        {val.title}
//      </h3>
//    ))}
//  </div>
//  <h2 className="text-2xl md:text-3xl font-bold mb-4">Project Detail</h2>
//  <ul className="space-y-2">
//    <li className="text-base md:text-lg">
//      <div className="flex gap-2 items-center " >
//        <a href="#" className="text-blue-500 hover:underline">
//        {projects[selectedProjectIndex].title}
//      </a>
//      {projects[selectedProjectIndex].playStore && <Link href={projects[selectedProjectIndex].playStore} ><Playstore height={20} width={20}/></Link> }
//      {projects[selectedProjectIndex].appStore && <Link href={projects[selectedProjectIndex].appStore} ><Appstore height={20} width={20}/></Link> }
//      </div>
//    </li>
//    <p className="text-sm md:text-base">
//      {projects[selectedProjectIndex].details}
//    </p>
//  </ul>
//  <button
//    onClick={handleBackClick}
//    className="mt-4 px-4 py-2 bg-white text-black rounded-lg"
//  >
//    Back to Home
//  </button>
// </div>