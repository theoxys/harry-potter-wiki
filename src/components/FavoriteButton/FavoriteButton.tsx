"use client";

import { Character } from "@/types/Character";
import { useFavorites } from "@/hooks/useFavorites";
import { Star } from "lucide-react";
import { cx } from "@/utils/tailwind";

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
    <button
      onClick={handleClick}
      className={cx(
        "absolute flex items-center gap-2 top-6 right-6 py-2 px-4 rounded-full backdrop-blur-sm transition-colors cursor-pointer",
        isFavoritedCharacter
          ? "bg-primary"
          : "bg-background/80 hover:bg-background"
      )}
    >
      <p className="text-neutral">
        {isFavoritedCharacter ? "Favorited!" : "Add to favorites"}
      </p>
      <Star
        className={`h-5 w-5 transition-colors ${
          isFavoritedCharacter
            ? "fill-neutral stroke-neutral"
            : "stroke-neutral fill-transparent"
        }`}
      />
    </button>
  );
}
