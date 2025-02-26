"use client";

import { useGetStaff } from "@/hooks/useGetStaff";
import { useQueryState } from "nuqs";
import { useFilter } from "@/hooks/useFilter";
import { useSorting } from "@/hooks/useSorting";
import { CharacterCard } from "@/components/CharacterCard/CharacterCard";
import { useGetAllCharacters } from "@/hooks/useGetAllCharacters";
import { FavoriteButton } from "@/components/FavoriteButton/FavoriteButton";

export default function AllCharacters() {
  const { characters, loading, error } = useGetAllCharacters();

  const [searchTerm] = useQueryState("search", { defaultValue: "" });
  const [house] = useQueryState("house", { defaultValue: "Any house" });
  const [species] = useQueryState("species", { defaultValue: "Any species" });
  const [ancestry] = useQueryState("ancestry", {
    defaultValue: "Any ancestry",
  });
  const [sortField] = useQueryState("sortField", { defaultValue: "name" });
  const [sortDirection] = useQueryState("sortDirection", {
    defaultValue: "asc",
  });

  const filters = {
    searchTerm,
    house,
    species,
    ancestry,
  };

  const sortOption = {
    field: sortField as "name",
    direction: sortDirection as "asc" | "desc",
  };

  const filteredCharacters = useFilter(characters, filters);
  const sortedCharacters = useSorting(filteredCharacters, sortOption);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedCharacters.map((character) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          name={character.name}
          image={character.image}
          gender={character.gender}
          house={character.house}
        >
          <FavoriteButton character={character} />
        </CharacterCard>
      ))}
    </div>
  );
}
