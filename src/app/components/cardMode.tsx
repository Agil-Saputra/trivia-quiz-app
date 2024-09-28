import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardModeProps = {
  image: any;
  link: string;
  title: string;
  description: string;
};

export default function CardMode({
  image,
  title,
  description,
  link,
}: CardModeProps) {
  return (
    <div className="border relative rounded-lg mt-10 bg-slate-50">
      <div className="relative ">
        <Image
          src={image}
          alt="banner mode image"
          className="rounded-lg opacity-60"
        />
        <div className="absolute bottom-0 inset-x-0 h-32 w-full bg-slate-50 to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] "></div>
      </div>
      <div className="px-4 py-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p dangerouslySetInnerHTML={{__html : description}}>
        </p>
        <div className="mt-6 gap-2 flex items-center">
          <Link
            href={link}
            className="py-4 text-lg px-8 bg-blue-500 rounded-lg text-white font-bold hover:scale-105 active:scale-100 transition-all ease-in-out duration-200"
          >
            Play
          </Link>
        </div>
      </div>
    </div>
  );
}
