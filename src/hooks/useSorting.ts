import { useMemo } from "react";
import { Character } from "@/types/Character";

type SortOption = {
  field: keyof Character;
  direction: "asc" | "desc";
};

export function useSorting<T extends Character>(
  items: T[],
  sortOption?: SortOption
) {
  return useMemo(() => {
    if (!sortOption) return items;

    return [...items].sort((a, b) => {
      const aValue = a[sortOption.field];
      const bValue = b[sortOption.field];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOption.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortOption.direction === "asc"
          ? aValue - bValue
          : bValue - aValue;
      }

      return 0;
    });
  }, [items, sortOption]);
}
