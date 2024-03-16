import Checkbox from "./components/Checkbox/Checkbox";
import "./styles/global.css";

function ActionHeader() {
  return (
    <div className="grid grid-cols-[30px_1fr]  gap-4 border-b border-gray-400/50  px-2 py-2">
      <Checkbox checked onChange={() => {}} />
      <div className="flex gap-2">
        <button className="bg-gray-900/70 text-gray-100 py-2 px-4 rounded hover:bg-gray-900/90 transition-colors">
          Arquivados
        </button>
        <button className="bg-gray-900/70 text-gray-100 py-2 px-4 rounded hover:bg-gray-900/90 transition-colors">
          Arquivados
        </button>
      </div>
    </div>
  );
}

function Exemple() {
  return (
    <div className="grid grid-cols-[30px_1fr]  gap-4 items-start border-b  border-gray-400/50  px-2 py-2">
      <Checkbox checked onChange={() => {}} className="top-[-8px]" />
      <div>
        <h1 className="font-bold text-gray-900/80">Compre hoje!!!!!!!!</h1>
        <p className="text-xs text-gray-400">
          Na semana do consumidor, os preços estão um absurdo!
        </p>
        <p className="text-xs text-gray-400">não perca está oportunidade!</p>
      </div>
    </div>
  );
}

export function App() {
  return (
    <div className="w-full h-screen flex">
      <div className="max-w-80 bg-gray-100 flex flex-col gap-3 m-auto ">
        <ActionHeader />
        {Array.from({ length: 4 }).map((_, index) => (
          <Exemple key={index} />
        ))}
      </div>
    </div>
  );
}
