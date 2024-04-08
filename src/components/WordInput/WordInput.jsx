import { useState } from "react";

const WordInput = ({ onSubmitWord }) => {
  const [letters, setLetters] = useState(["", "", "", "", ""]);
  const handleInputChange = (index, e) => {
    const newLetters = [...letters];
    newLetters[index] = e.target.value.toUpperCase();
    setLetters(newLetters);
  };

  const handleSubmit = () => {
    const word = letters.join("");
    onSubmitWord(word);
  };
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Guess the Word!</h1>
      <div className="flex mb-4">
        {letters.map((letter, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={letter}
            onChange={(e) => handleInputChange(index, e)}
            className="border border-gray-300 rounded-md p-2 mr-2"
          />
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default WordInput;
