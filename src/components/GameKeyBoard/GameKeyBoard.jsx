// GameKeyBoard.jsx
import React from "react";

const GameKeyBoard = ({ onKeyPress }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleKeyPress = (key) => {
    onKeyPress(key);
  };

  return (
    <div className="flex flex-wrap">
      {alphabet.split("").map((letter, index) => (
        <div
          key={index}
          className="m-1 p-2 border border-gray-300 rounded cursor-pointer text-xl text-center hover:bg-gray-200"
          onClick={() => handleKeyPress(letter)}
        >
          {letter}
        </div>
      ))}
      <div
        className="m-1 p-2 border border-gray-300 rounded cursor-pointer text-xl text-center hover:bg-gray-200"
        onClick={() => handleKeyPress("Backspace")}
      >
        Backspace
      </div>
      <div
        className="m-1 p-2 border border-gray-300 rounded cursor-pointer text-xl text-center hover:bg-gray-200"
        onClick={() => handleKeyPress("Enter")}
      >
        Enter
      </div>
    </div>
  );
};

export default GameKeyBoard;
