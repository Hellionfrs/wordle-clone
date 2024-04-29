import Wordle from "../Wordle";

function App() {
  return (
    <div className="flex justify-center justify-self-center ">
      <div className="m-auto ">
        <h1 className="text-3xl font-bold underline text-center">Wordle Clone</h1>
        <Wordle />
      </div>
    </div>
  );
}

export default App;
