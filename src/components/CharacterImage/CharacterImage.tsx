import Image from "next/image";

type CharacterImageProps = {
  image?: string;
  gender: string;
  name: string;
  className?: string;
};

export function CharacterImage({
  image,
  gender,
  name,
  className,
}: CharacterImageProps) {
  const placeholderImage =
    gender.toLowerCase() === "female"
      ? "/images/wizard-female.webp"
      : "/images/wizard-male.webp";

  return (
    <div className={`relative aspect-[4/5] overflow-hidden ${className}`}>
      {image ? (
        <img src={image} alt={name} className="w-full h-full object-cover" />
      ) : (
        <img
          src={placeholderImage}
          alt={`${name} placeholder`}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
