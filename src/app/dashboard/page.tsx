"use client";
import Image from "next/image";
import Link from "next/link";
import FalseTrueBannerImage from "@/app/assets/false-true-mode.png";
import MultipleChoiceBannerImage from "@/app/assets/multiple-choice-mode.png";
import CardMode from "../components/cardMode";

const Dashboard = () => {
  const questions = JSON.parse(localStorage.getItem("questions") || "[]");
  console.log(questions);
  return (
    <div className="grid place-items-center mt-10">
      <div className="md:w-1/2 w-full px-6">
        <div className="text-left mb-40">
          <h1 className="text-4xl font-bold mb-2">Lets Play Buddy 💪!</h1>
          <div className="text-lg">
            Choose Your quiz game mode and press play button to start your quiz
            game 🚀!!
          </div>
          <CardMode
            image={FalseTrueBannerImage}
            link="dashboard/play"
            title="False And True Trivia Quiz"
            description="This quiz have <strong>10 questions</strong> and just have two answer false and true, each quiz if your answer is correct will give you <strong>10 points </strong> and if youre answer is wrong your score will be <strong>minus -5 points. </strong> time for this quiz mode just only <strong>1 minutes</strong>"
          />
          <CardMode
            image={MultipleChoiceBannerImage}
            link="dashboard/play-mode-2"
            title="Multiple Choice Quiz"
            description="This quiz have <strong>10 questions</strong> and you have multiple choice, each quiz if your answer is correct will give you <strong>10 points </strong> and if youre answer is wrong your score will be <strong>minus -5 points. </strong> time for this quiz mode just only <strong>3 minutes</strong>"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
