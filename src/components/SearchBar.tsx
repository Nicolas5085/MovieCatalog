import { useRef } from "react";

export const SearchBar = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{ marginBottom: "20px" }}>
      <input 
        ref={inputRef} 
        placeholder="Buscar filmes..." 
      />

      <button onClick={() => onSearch(inputRef.current!.value)}>
        Buscar
      </button>
    </div>
  );
};
