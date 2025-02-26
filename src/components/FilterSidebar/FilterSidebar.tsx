"use client";

import { useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

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
          <h3 className="text-sm text-neutral/70 mb-2">SEARCH BY NAME</h3>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-neutral/10 rounded-lg bg-surface text-neutral"
            placeholder="Search..."
          />
        </div>

        <div>
          <h3 className="text-sm text-neutral/70 mb-2">FILTER BY HOUSE</h3>
          <Select value={house} onValueChange={setHouse}>
            <SelectTrigger>
              <SelectValue>{house}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {HOUSES.map((h) => (
                <SelectItem key={h} value={h}>
                  {h}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h3 className="text-sm text-neutral/70 mb-2">FILTER BY SPECIES</h3>
          <Select value={species} onValueChange={setSpecies}>
            <SelectTrigger>
              <SelectValue>{species}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {SPECIES.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h3 className="text-sm text-neutral/70 mb-2">FILTER BY ANCESTRY</h3>
          <Select value={ancestry} onValueChange={setAncestry}>
            <SelectTrigger>
              <SelectValue>{ancestry}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              {ANCESTRY.map((a) => (
                <SelectItem key={a} value={a}>
                  {a}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <h3 className="text-sm text-neutral/70 mb-2">SORT BY</h3>
          <Select
            value={`${sortField}-${sortDirection}`}
            onValueChange={(value) => {
              const [field, direction] = value.split("-");
              setSortField(field);
              setSortDirection(direction);
            }}
          >
            <SelectTrigger>
              <SelectValue>
                {sortField === "name"
                  ? `Nome (${sortDirection === "asc" ? "A-Z" : "Z-A"})`
                  : `Casa (${sortDirection === "asc" ? "A-Z" : "Z-A"})`}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Nome (A-Z)</SelectItem>
              <SelectItem value="name-desc">Nome (Z-A)</SelectItem>
              <SelectItem value="house-asc">Casa (A-Z)</SelectItem>
              <SelectItem value="house-desc">Casa (Z-A)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
