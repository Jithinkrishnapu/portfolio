import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Playstore from "../assets/playstore-svgrepo-com.svg";
import Appstore from "../assets/appstore-svgrepo-com.svg";

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  appStore:string;
  playstore:string;
}

export default function Cards({ title, imageSrc, appStore,playstore }: CardProps) {
  return (
    <Card className="py-4 px-3 backdrop-blur-md  bg-white bg-opacity-10 mb-4 shadow-lg rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-slate-400">
      <CardBody className="overflow-visible py-2">
        <Image
          src={imageSrc}
          alt="Card background"
          className="object-cover rounded-xl"
          width={270}
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2  flex-col items-start">
        <div className="flex w-full justify-between items-center">
          <h3 className="text-tiny capitalize font-bold text-white">{title}</h3>
          <div className="flex gap-2 items-center">
            {appStore && <Appstore height={20} width={20} />}
            {playstore && <Playstore height={20} width={20} />}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
