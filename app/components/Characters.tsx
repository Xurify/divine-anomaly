import React from "react";
import Image from "next/image";

interface Character {
  name: string;
  title: string;
  image: string;
  description: string;
}

const characters: Character[] = [
  {
    name: "Aseo",
    title: "Flameborn Sentinel",
    image: "/images/characters/Aseo.png",
    description: "Trained by the legendary warriors of Vasta, this noble knight commands flames with the power to shatter mountains and burn through the heavens. A blazing symbol of courage, he stands as a guardian against darkness, ready to face any foe even if it means setting the stars ablaze."
  },
  {
    name: "Retse",
    title: "Echo of the First Light",
    image: "/images/characters/Retse.png",
    description: "Born beneath the whispering stars, daughter of the Void, she weaves the unseen threads of the cosmos. Her orb, a relic of forgotten creation, pulses with secrets older than time. Few understand her power fewer can survive its touch."
  },
  {
    name: "Nahyl",
    title: "The Whisper of the End",
    image: "/images/characters/Nahyl.png",
    description: "None see him only the aftermath: suffocating silence, bloody stains, and the stench of fear thick in the air. A ghost. A relentless hunter. No footsteps, no warnings only bodies left behind. You don't hear him… you feel him the cold, merciless grip of death around your throat. No one knows his face. No one really knows who he is.. except the Death."
  },
];

const Characters: React.FC = () => {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-transparent to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-medium mb-12 text-center tracking-wide text-[#f3e9d2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
          Meet the Characters
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characters.map((character) => (
            <div 
              key={character.name}
              className="flex flex-col items-center bg-[#1a1a1a] border border-[#b4a57733] rounded-lg overflow-hidden shadow-lg hover:shadow-[#b4a57733] transition-shadow duration-300"
            >
              <div className="relative w-full h-80 overflow-hidden">
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 w-full">
                <h3 className="text-2xl font-medium mb-1 text-[#f5eac9] uppercase">
                  {character.name}
                </h3>
                <p className="text-[#b4a577] italic mb-4">
                  {character.title}
                </p>
                <p className="text-[#e0d6c3]">
                  {character.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Characters; 