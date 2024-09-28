import Image from "next/image";
import Link from "next/link";
import manIlustration from "@/app/assets/good.svg"

export default function Home() {
  return (
    <div className="grid place-items-center mt-40 px-6">
      <div className="text-left max-w-[60ch] z-40">
        <h1 className="text-6xl font-bold">Hello Buddy👋</h1>
		<h3 className="text-2xl mt-6 font-bold">Welcome To Trivia Quiz App✨, </h3>
        <p className="mb-10   text-xl">
          Here you will work on quizzes based
          on a lot of categories, please answer it correctly and you will get
          great score, GOOD LUCK!!💪
        </p>
        <Link href="dashboard" className="py-4 text-lg px-6 bg-blue-500 rounded-lg text-white font-bold ">
          Get Started
        </Link>
      </div>
		<Image src={manIlustration} alt="brainLogo" className="w-1/2 h-1/2 fixed -bottom-32 -right-56 -z-1"/>
    </div>
  );
}
