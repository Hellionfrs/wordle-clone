import WordleGame from "../Wordle/Wordle";

function App() {
  return (
    <div className="flex justify-center w-[1440px] ">
      <div className="m-auto ">
        <h1 className="text-3xl font-bold underline ">Wordle Clone</h1>
        <WordleGame />
      </div>
    </div>
  );
}

export default App;
