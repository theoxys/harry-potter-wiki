import { useMemo } from "react";
import { Character } from "@/types/Character";

type FilterOptions = {
  searchTerm: string;
  house: string;
  species: string;
  ancestry: string;
};

export function useFilter<T extends Character>(
  items: T[],
  filters: FilterOptions
) {
  return useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        !filters.searchTerm ||
        item.name.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesHouse =
        filters.house === "Any house" ||
        item.house?.toLowerCase() === filters.house.toLowerCase();

      const matchesSpecies =
        filters.species === "Any species" ||
        item.species?.toLowerCase() === filters.species.toLowerCase();

      const matchesAncestry =
        filters.ancestry === "Any ancestry" ||
        item.ancestry?.toLowerCase() === filters.ancestry.toLowerCase();

      return matchesSearch && matchesHouse && matchesSpecies && matchesAncestry;
    });
  }, [items, filters]);
}
