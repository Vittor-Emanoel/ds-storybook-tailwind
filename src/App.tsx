import { useState } from "react";
import Checkbox from "./components/Checkbox/Checkbox";
import { Select } from "./components/Input";
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
          Na semana do consumidor, os preços estão um absurdo! não perca está
          oportunidade!
        </p>
      </div>
    </div>
  );
}

export function App() {
  const options = [
    { value: "Português", label: "Português" },
    { value: "Espanhol", label: "Espanhol" },
    { value: "Russo", label: "Russo" },
  ];

  const options2 = [
    { value: "UCT- Brasilia", label: "UCT- Brasilia" },
    { value: "UCT-Belo Horizonte", label: "UCT-Belo Horizonte" },
    { value: "UCT-Panamá", label: "UTO-Panamá" },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (value: any) => {
    setSelectedOption(value);
  };

  return (
    <div className=" mx-auto mt-5 max-w-[400px] space-y-4">
      <h1 className="text-2xl font-bold mb-4">
        Exemplo de Uso do Componente Select
      </h1>
      <Select
        placeholder="Idioma"
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
      />
      <Select
        placeholder="Fuso horário"
        options={options2}
        value={selectedOption}
        onChange={handleSelectChange}
      />
      <p className="mt-4">Opção selecionada: {selectedOption}</p>
    </div>
  );
}
