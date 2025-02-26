"use client";

import { useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

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

  const handleResetFilters = () => {
    setSearchTerm("");
    setHouse("Any house");
    setSpecies("Any species");
    setAncestry("Any ancestry");
    setSortField("name");
    setSortDirection("asc");
  };

  return (
    <div className="w-64 p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-sm text-neutral/70 mb-2">SEARCH BY NAME</h3>
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
                {`Name (${sortDirection === "asc" ? "A-Z" : "Z-A"})`}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={handleResetFilters} className="w-full">
          Reset Filters
        </Button>
      </div>
    </div>
  );
}
