import { useRef, useState } from "react";

const WordInput = ({ onSubmitWord }) => {
  const [letters, setLetters] = useState(["", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleInputChange = (index, e) => {
    let { value } = e.target;
    value = value.toUpperCase().replace(/[^A-Z]/g, "");
    const newLetters = [...letters];
    newLetters[index] = value.slice(0, 1);
    setLetters(newLetters);

    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && letters[index] === "") {
      inputRefs.current[index - 1].focus();
    }

    if (e.key === "Enter" && letters.join("").length === 5) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    const word = letters.join("");
    console.log(word);
    onSubmitWord(word);
    setLetters(["", "", "", "", ""]);
    inputRefs.current[0].focus();
  };

  let summitable = letters.join("").length !== 5;
  return (
    <div>
      {/* <h1 className="text-2xl font-bold mb-4">Guess the Word!</h1> */}
      <div className="flex">
        {letters.map((letter, index) => (
          <div key={index}>
            <input
              type="text"
              maxLength="1"
              value={letter}
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="border border-gray-300 rounded-md p-2 mr-2 w-[4rem] h-[4rem] text-4xl text-center"
              ref={(el) => (inputRefs.current[index] = el)}
              autoFocus= {index === 0}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 enabled:hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 hidden"
        disabled={summitable}
      >
        Submit
      </button>
    </div>
  );
};

export default WordInput;
