"use client";

import { Character } from "@/types/Character";
import { useFavorites } from "@/hooks/useFavorites";
import { Star } from "lucide-react";
import { Button } from "../ui/Button";

interface FavoriteButtonProps {
  character: Character;
}

export function FavoriteButton({ character }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFavoritedCharacter = isFavorite(character.id);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleFavorite(character);
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Button
      onClick={handleClick}
      className="absolute top-6 right-6 py-2 px-4 rounded-full"
      variant={isFavoritedCharacter ? "primary" : "darker"}
    >
      {isFavoritedCharacter ? "Favorited!" : "Add to favorites"}
      <Star
        className={`h-5 w-5 transition-colors ${
          isFavoritedCharacter
            ? "fill-neutral stroke-neutral"
            : "stroke-neutral fill-transparent"
        }`}
      />
    </Button>
  );
}
