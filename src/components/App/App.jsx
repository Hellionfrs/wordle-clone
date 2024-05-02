import Wordle from "../Wordle";

function App() {
  return (
    <div className="flex justify-center justify-self-center ">
      <div className="flex flex-col gap-2 m-auto mt-10">
        <h1 className="text-4xl font-bold  text-center">Wordle Clone</h1>
        <Wordle />
      </div>
    </div>
  );
}

export default App;
