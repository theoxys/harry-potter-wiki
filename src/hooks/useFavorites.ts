import { Character } from "@/types/Character";
import { useLocalStorage } from "./useLocalStorage";
import { useCallback } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<Character[]>(
    "favorites",
    []
  );

  const addFavorite = useCallback(
    (character: Character) => {
      setFavorites((prev) => [...prev, character]);
    },
    [setFavorites]
  );

  const removeFavorite = useCallback(
    (characterId: string) => {
      setFavorites((prev) => prev.filter((char) => char.id !== characterId));
    },
    [setFavorites]
  );

  const isFavorite = useCallback(
    (characterId: string) => {
      return favorites.some((char) => char.id === characterId);
    },
    [favorites]
  );

  const toggleFavorite = useCallback(
    (character: Character) => {
      if (isFavorite(character.id)) {
        removeFavorite(character.id);
      } else {
        addFavorite(character);
      }
    },
    [isFavorite, removeFavorite, addFavorite]
  );

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}
