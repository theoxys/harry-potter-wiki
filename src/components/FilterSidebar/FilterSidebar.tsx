"use client";

import { useQueryState } from "nuqs";
import { Character } from "@/types/Character";

const HOUSES = [
  "Any house",
  "Gryffindor",
  "Slytherin",
  "Ravenclaw",
  "Hufflepuff",
];
const SPECIES = ["Any species", "Human", "Half-Giant", "Werewolf", "Ghost"];
const ANCESTRY = ["Any ancestry", "Pure-blood", "Half-blood", "Muggle-born"];

export function FilterSidebar() {
  const [searchTerm, setSearchTerm] = useQueryState("search", {
    defaultValue: "",
  });
  const [house, setHouse] = useQueryState("house", {
    defaultValue: "Any house",
  });
  const [species, setSpecies] = useQueryState("species", {
    defaultValue: "Any species",
  });
  const [ancestry, setAncestry] = useQueryState("ancestry", {
    defaultValue: "Any ancestry",
  });
  const [sortField, setSortField] = useQueryState("sortField", {
    defaultValue: "name",
  });
  const [sortDirection, setSortDirection] = useQueryState("sortDirection", {
    defaultValue: "asc",
  });

  return (
    <div className="w-64 p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm text-element mb-2">SEARCH BY NAME</h3>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-element rounded-lg bg-surface text-neutral"
            placeholder="Search..."
          />
        </div>

        <div>
          <h3 className="text-sm text-element mb-2">FILTER BY HOUSE</h3>
          <select
            value={house}
            onChange={(e) => setHouse(e.target.value)}
            className="w-full p-2 border border-element rounded-lg bg-surface text-neutral"
          >
            {HOUSES.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="text-sm text-element mb-2">FILTER BY SPECIES</h3>
          <select
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="w-full p-2 border border-element rounded-lg bg-surface text-neutral"
          >
            {SPECIES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="text-sm text-element mb-2">FILTER BY ANCESTRY</h3>
          <select
            value={ancestry}
            onChange={(e) => setAncestry(e.target.value)}
            className="w-full p-2 border border-element rounded-lg bg-surface text-neutral"
          >
            {ANCESTRY.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3 className="text-sm text-element mb-2">SORT BY</h3>
          <select
            value={`${sortField}-${sortDirection}`}
            onChange={(e) => {
              const [field, direction] = e.target.value.split("-");
              setSortField(field);
              setSortDirection(direction);
            }}
            className="w-full p-2 border border-element rounded-lg bg-surface text-neutral"
          >
            <option value="name-asc">Nome (A-Z)</option>
            <option value="name-desc">Nome (Z-A)</option>
            <option value="house-asc">Casa (A-Z)</option>
            <option value="house-desc">Casa (Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  );
}
