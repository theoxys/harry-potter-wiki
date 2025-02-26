import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { api } from "@/services/api";

export default async function CharacterPage({
  params,
}: {
  params: { id: string };
}) {
  const character = await api.characters.getById(params.id);

  if (!character) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8 bg-background text-neutral">
      <Link href="/list/staff" className="self-start mb-8 text-neutral">
        ← Voltar para Staff
      </Link>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-surface">
          {character[0].image ? (
            <Image
              src={character[0].image}
              alt={character[0].name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              Sem imagem
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-neutral">
            {character[0].name}
          </h1>

          <div className="grid grid-cols-2 gap-4">
            <InfoItem
              label="Casa"
              value={character[0].house || "Desconhecida"}
            />
            <InfoItem label="Espécie" value={character[0].species} />
            <InfoItem label="Gênero" value={character[0].gender} />
            <InfoItem
              label="Data de Nascimento"
              value={character[0].dateOfBirth || "Desconhecida"}
            />
            <InfoItem label="Cor dos Olhos" value={character[0].eyeColour} />
            <InfoItem label="Cor do Cabelo" value={character[0].hairColour} />
            <InfoItem
              label="Patrono"
              value={character[0].patronus || "Desconhecido"}
            />
            <InfoItem label="Ator" value={character[0].actor} />
            <InfoItem
              label="Ancestralidade"
              value={character[0].ancestry || "Desconhecida"}
            />
            <InfoItem
              label="Status"
              value={character[0].alive ? "Vivo" : "Falecido"}
            />
          </div>

          {character[0].wand && Object.keys(character[0].wand).length > 0 && (
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Varinha</h2>
              <div className="grid grid-cols-2 gap-4">
                <InfoItem
                  label="Madeira"
                  value={character[0].wand.wood || "Desconhecida"}
                />
                <InfoItem
                  label="Núcleo"
                  value={character[0].wand.core || "Desconhecido"}
                />
                <InfoItem
                  label="Comprimento"
                  value={
                    character[0].wand.length
                      ? `${character[0].wand.length} polegadas`
                      : "Desconhecido"
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
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}
