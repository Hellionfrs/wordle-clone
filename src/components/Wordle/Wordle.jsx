import React, { useState } from "react";
import WordInput from "../WordInput/WordInput";
import clsx from "clsx";
import { v4 as uuid } from "uuid";
import { dailyWord } from "../../constant";
import TriesComp from "../TriesComp";

const Wordle = () => {
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);
  const initialRows = Array.from({ length: 6 }, (_, index) => ({
    id: uuid(),
    content: Array.from({ length: 5 }, (_) => " "),
    isActive: currentGuessIndex === index,
  }));
  const [guesses, setGuesses] = useState(initialRows);

  const [animateLastWord, setAnimateLastWord] = useState(false);
  const [userWon, setUserWon] = useState(false);
  const [triesRemaining, setTriesRemaining] = useState(6);

  const handleSubmitWord = (word) => {
    const userGuessRight = word === dailyWord;
    if (userGuessRight) {
      setUserWon(true);
    }
    const newGuesses = [...guesses];
    newGuesses[currentGuessIndex].content = word.split("");
    setGuesses(newGuesses);
    setCurrentGuessIndex(currentGuessIndex + 1);
    setTriesRemaining(6 - (currentGuessIndex + 1));
    if (currentGuessIndex === guesses.length - 1) {
      // Última respuesta
      setAnimateLastWord(true);
    }
    console.log(guesses);
  };

  return (
    <div className="flex flex-col gap-2 p-4 pb-8 border border-gray-200 border-spacing-4 rounded-xl shadow-md">
      {/* <h1 className="text-2xl font-bold mb-4">Wordle Clone</h1> */}
      {guesses.map((guess, index) => (
        <div key={guess.id} className="flex">
          {index === currentGuessIndex
            ? currentGuessIndex < 6 &&
              !userWon && <WordInput onSubmitWord={handleSubmitWord} />
            : guess.content.map((letter, i) => {
                const isLetterInDailyWord = dailyWord.includes(letter);
                const isLetterInTheCorrectPosition = dailyWord[i] === letter;

                // console.log(
                //   "isLetterInDailyWord: ",
                //   isLetterInDailyWord,
                //   "isLetterInPos: ",
                //   isLetterInTheCorrectPosition,
                //   dailyWord
                // );
                let letterClassNames =
                  "border border-gray-300 rounded-md p-2 mr-2 w-[4rem] h-[4rem] text-4xl text-center opacity-0 text-white";
                return (
                  <div
                    key={`letter-${letter}-${i}`}
                    className={clsx(
                      letterClassNames,
                      currentGuessIndex - 1 === index
                        ? "animate-letter-fade"
                        : "opacity-100",

                      isLetterInTheCorrectPosition
                        ? "bg-green-400 "
                        : isLetterInDailyWord
                        ? "bg-yellow-400 "
                        : "bg-gray-400 "
                    )}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {letter}
                  </div>
                );
              })}
        </div>
      ))}
      {/* {currentGuessIndex < 6 && !userWon && ( 
       <WordInput onSubmitWord={handleSubmitWord} />
      )} */}
      {userWon ? (
        <div className="opacity-0 text-3xl font-bold text-green-600 text-center animate-show-up transition-all">
          You won!
        </div>
      ) : triesRemaining === 0 ? (
        <div className="opacity-0 text-3xl font-bold text-red-600 text-center animate-show-up transition-all">
          You lose!
        </div>
      ) : (
        <div className="flex gap-2 mt-4 text-lg font-medium text-gray-600">
          <span>You got </span>
          <TriesComp triesRemaining={triesRemaining} />
          <span> more tries</span>
        </div>
      )}
    </div>
    // animate-flip-up animate-delay-[50ms]
  );
};

export default Wordle;
