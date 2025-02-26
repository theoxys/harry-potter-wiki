"use client";

import { useGetStaff } from "@/hooks/useGetStaff";
import { Link } from "next-view-transitions";
import { useQueryState } from "nuqs";
import { FilterSidebar } from "@/components/FilterSidebar/FilterSidebar";
import { useFilter } from "@/hooks/useFilter";
import { useSorting } from "@/hooks/useSorting";
import { CharacterImage } from "@/components/CharacterImage/CharacterImage";

export default function Staff() {
  const { staff, loading, error } = useGetStaff();

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
    field: sortField as "name" | "house",
    direction: sortDirection as "asc" | "desc",
  };

  const filteredStaff = useFilter(staff, filters);
  const sortedStaff = useSorting(filteredStaff, sortOption);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedStaff.map((character) => (
        <Link
          key={character.id}
          href={`/character/${character.id}`}
          className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <CharacterImage
            image={character.image}
            gender={character.gender}
            name={character.name}
          />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium text-neutral">
                {character.name}
              </h2>
            </div>
            <p className="text-sm text-element mt-1">
              {character.house || "Unknown house"}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
