import { Link } from "next-view-transitions";
import { CharacterImage } from "@/components/CharacterImage/CharacterImage";

interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  gender: string;
  house?: string;
  children?: React.ReactNode;
}

export function CharacterCard({
  id,
  name,
  image,
  gender,
  house,
  children,
}: CharacterCardProps) {
  return (
    <div className="group relative flex flex-col bg-surface border border-neutral/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-4 gap-4">
      <Link href={`/character/${id}`} className="flex flex-col gap-4">
        <div className="relative">
          <CharacterImage image={image} gender={gender} name={name} />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium text-neutral">{name}</h2>
          </div>
          <p className="text-sm mt-1 text-neutral/70">
            {house || "Unknown house"}
          </p>
        </div>
      </Link>
      {children}
    </div>
  );
}
