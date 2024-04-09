import React, { useState } from 'react';
import WordInput from '../WordInput/WordInput';
import { v4 as uuid } from 'uuid';
const Wordle = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuessIndex, setCurrentGuessIndex] = useState(0);

  const handleSubmitWord = (word) => {
    const newGuesses = [...guesses];
    newGuesses[currentGuessIndex] = word;
    setGuesses(newGuesses);
    setCurrentGuessIndex(currentGuessIndex + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wordle Clone</h1>
      {guesses.map((guess, index) => (
        <div key={uuid()} className="flex mb-4">
          {guess.split('').map((letter, i) => (
            <div key={uuid()} className="border border-gray-300 rounded-md p-2 mr-2 w-[4rem] h-[4rem] text-4xl text-center">
              {letter}
            </div>
          ))}
        </div>
      ))}
      {currentGuessIndex < 6 && (
        <WordInput onSubmitWord={handleSubmitWord} />
      )}
    </div>
  );
};

export default Wordle;