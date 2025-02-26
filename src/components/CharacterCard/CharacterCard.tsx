import { Link } from "next-view-transitions";
import { CharacterImage } from "@/components/CharacterImage/CharacterImage";

interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  gender: string;
  house?: string;
}

export function CharacterCard({
  id,
  name,
  image,
  gender,
  house,
}: CharacterCardProps) {
  return (
    <Link
      href={`/character/${id}`}
      className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <CharacterImage image={image} gender={gender} name={name} />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-neutral">{name}</h2>
        </div>
        <p className="text-sm mt-1 text-neutral/70">
          {house || "Unknown house"}
        </p>
      </div>
    </Link>
  );
}
