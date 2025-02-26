import { Character } from "../types/Character";
import { useState, useEffect } from "react";

export function useGetCharacterById(id: string) {
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://hp-api.onrender.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data: Character[]) => {
        setCharacter(data[0] || null);
        setLoading(false);
      })
      .catch((err) => {
        setError("Erro ao carregar personagem");
        setLoading(false);
      });
  }, [id]);

  return { character, loading, error };
}
