import { notFound } from "next/navigation";
import { api } from "@/services/api";
import { CharacterCard } from "@/components/CharacterCard/CharacterCard";
import { BackButton } from "@/components/BackButton/BackButton";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function CharacterPage({ params }: PageProps) {
  const { id } = await params;
  const character = await api.characters.getById(id);

  if (!character) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-start max-w-4xl mx-auto min-h-screen p-8 bg-background text-neutral">
      <BackButton />
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <CharacterCard
          id={character[0].id}
          name={character[0].name}
          image={character[0].image}
          gender={character[0].gender}
        />

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-neutral">
            {character[0].name}
          </h1>

          <div className="grid grid-cols-2 gap-4 bg-surface border border-neutral/10 rounded-lg p-4">
            <InfoItem label="House" value={character[0].house} />
            <InfoItem label="Species" value={character[0].species} />
            <InfoItem label="Gender" value={character[0].gender} />
            <InfoItem label="Date of Birth" value={character[0].dateOfBirth} />
            <InfoItem label="Eye Color" value={character[0].eyeColour} />
            <InfoItem label="Hair Color" value={character[0].hairColour} />
            <InfoItem label="Patronus" value={character[0].patronus} />
            <InfoItem label="Actor" value={character[0].actor} />
            <InfoItem label="Ancestry" value={character[0].ancestry} />
            <InfoItem
              label="Status"
              value={character[0].alive ? "Alive" : "Deceased"}
            />
          </div>

          {character[0].wand && Object.keys(character[0].wand).length > 0 && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Wand</h2>
              <div className="grid grid-cols-2 gap-4 bg-surface border border-neutral/10 rounded-lg p-4">
                <InfoItem label="Wood" value={character[0].wand.wood} />
                <InfoItem label="Core" value={character[0].wand.core} />
                <InfoItem
                  label="Length"
                  value={
                    character[0].wand.length
                      ? `${character[0].wand.length} Inch`
                      : "Unknown"
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string | number }) {
  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">
        {label[0].toUpperCase() + label.slice(1)}
      </span>
      <span className="font-medium text-lg ">
        {value && (typeof value === "string" ? capitalize(value) : value)}
        {!value && "Unknown"}
      </span>
    </div>
  );
}
