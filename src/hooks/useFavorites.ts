import { Character } from "@/types/Character";
import { useLocalStorage } from "./useLocalStorage";

export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage<Character[]>(
    "favorites",
    []
  );

  const addFavorite = (character: Character) => {
    setFavorites((prev) => [...prev, character]);
  };

  const removeFavorite = (characterId: string) => {
    setFavorites((prev) => prev.filter((char) => char.id !== characterId));
  };

  const isFavorite = (characterId: string) => {
    return favorites.some((char) => char.id === characterId);
  };

  const toggleFavorite = (character: Character) => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}
