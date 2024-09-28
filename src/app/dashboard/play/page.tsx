"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

type quiz = {
  question: string;
  category: string;
  correct_answer: string;
  incorrect_answers: string;
  difficulty: string;
  type: boolean;
};

const Play = () => {
  const [data, setData] = useState<quiz[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [seconds, setSeconds] = useState(60);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [totalAnswers, setTotalAnswers] = useState(0);

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10&type=boolean")
      .then((res) => {
        setData(res.data.results);
        const interval = setInterval(() => {
          setSeconds((prevSeconds) => {
            if (prevSeconds > 0) {
              return prevSeconds - 1;
            } else {
              clearInterval(interval); // Stop the timer when it reaches 0
              setIndex(10); // Set index to 10 when timer ends
              return 0;
            }
          });
        }, 1000);
      })
      .catch((err) => console.log(err));
  }, []);

//   // function to check the answer based on true or false
  function checkAnswer(answer: string) {
    if (answer == data[index]?.correct_answer) {
      setScore(score + 10);
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setScore(score - 5);
      setIncorrectAnswers(incorrectAnswers + 1);
    }
    setIndex(index + 1);
    setTotalAnswers(totalAnswers + 1);
  }

// function to format time
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      remainingSeconds < 10 ? "0" : ""
    }${remainingSeconds}`;
  };
  return (
    <div className="grid place-items-center px-2">
      {data[0] ? (
        <div className="border p-6 rounded-lg md:w-1/2 w-full">
          {index > 9 && (
            <div className="text-center">
              <p className="text-6xl font-bold mb-6">Game Over</p>
              <p className="text-2xl font-semibold ">
                Your Total score : {score}
              </p>
              <p className="text-2xl font-semibold text-green-400">
                Correct Answers: {correctAnswers}
              </p>
              <p className="text-2xl font-semibold text-red-400">
                Incorrect Answers: {incorrectAnswers}
              </p>
              <p className="text-2xl font-semibold text-blue-600 mb-10 ">
                Total Answers: {totalAnswers}
              </p>
              <Link
                href="/dashboard"
                className="mr-5 py-4 px-6 bg-red-400 rounded-lg text-md font-bold hover:bg-red-800 hover:text-white transition-all duration-200 ease-in-out"
              >
                Back To Menu
              </Link>
              <a
                href="/dashboard/play"
                className="py-4 px-6 bg-blue-400 rounded-lg text-md font-bold hover:bg-blue-800 hover:text-white transition-all duration-200 ease-in-out"
              >
                Play Again
              </a>
            </div>
          )}
          <div className="grid place-items-center">
            {index <= 9 && (
              <div className="flex justify-between gap-2 w-full">
                <p className="font-bold text-5xl text-yellow-500">{formatTime(seconds)}</p>
                <p className="font-bold text-5xl">
                  {totalAnswers}/{data.length}
                </p>
              </div>
            )}
          </div>
          <div className="mt-6 mb-2">{data[index]?.category}</div>
          <div
            className="text-4xl font-bold max-w-full"
            dangerouslySetInnerHTML={{ __html: data[index]?.question }}
          ></div>
          {index <= 9 && (
            <div className="w-full grid md:grid-cols-2 mt-6 gap-6">
              <button
                className="py-4 px-6 bg-red-400 rounded-lg text-xl font-bold hover:bg-red-700 hover:text-white hover:scale-105 active:scale-100 transition-all duration-200 ease-in-out"
                onClick={() => checkAnswer("False")}
              >
                False
              </button>
              <button
                className="py-4 px-6 bg-green-400 rounded-lg text-xl font-bold hover:bg-green-800 hover:text-white hover:scale-105 active:scale-100 transition-all duration-200 ease-in-out"
                onClick={() => checkAnswer("True")}
              >
                True
              </button>
            </div>
          )}
        </div>
      ) : (
		<div className="grid place-items-center gap-2">
			<svg className="animate-spin mt-40" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C10.0109 4.5 8.10322 5.29018 6.6967 6.6967C5.29018 8.10322 4.5 10.0109 4.5 12C4.5 13.9891 5.29018 15.8968 6.6967 17.3033C8.10322 18.7098 10.0109 19.5 12 19.5C13.9891 19.5 15.8968 18.7098 17.3033 17.3033C18.7098 15.8968 19.5 13.9891 19.5 12C19.5 10.0109 18.7098 8.10322 17.3033 6.6967C15.8968 5.29018 13.9891 4.5 12 4.5ZM1.5 12C1.5 6.201 6.201 1.5 12 1.5C17.799 1.5 22.5 6.201 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.201 22.5 1.5 17.799 1.5 12Z" fill="black"/>
		<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0003 4.50001C10.0666 4.49587 8.20696 5.24269 6.81325 6.58301C6.52453 6.84997 6.14252 6.99287 5.74947 6.98096C5.35643 6.96904 4.98378 6.80326 4.71175 6.51931C4.43973 6.23535 4.29008 5.85594 4.29504 5.46274C4.3 5.06954 4.45916 4.69402 4.73825 4.41701C6.69029 2.54165 9.29333 1.49606 12.0003 1.50001C12.3981 1.50001 12.7796 1.65805 13.0609 1.93935C13.3422 2.22066 13.5003 2.60219 13.5003 3.00001C13.5003 3.39784 13.3422 3.77937 13.0609 4.06067C12.7796 4.34198 12.3981 4.50001 12.0003 4.50001Z" fill="#4285F4"/>
		</svg>
		<span className="font-semibold text-sm">Loading Your Game...</span>
		</div>
      )}
    </div>
  );
};

export default Play;
