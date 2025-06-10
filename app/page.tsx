import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-gradient-to-b text-white overflow-x-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/images/background3.png')] bg-cover bg-no-repeat bg-top opacity-40 pointer-events-none" />
      <div className="relative z-20 flex flex-col items-center w-full px-4">
        <header className="flex flex-col items-center pt-20 pb-10">
          <div className="mb-4">
            <Image
              src="/images/DivineAnomalyIconTransparent.png"
              alt="Divine Anomaly Logo"
              width={300}
              height={300}
              priority
            />
          </div>
          <h1 className="text-[2.8rem] sm:text-[5rem] font-normal mb-8 text-center uppercase bg-gradient-to-b from-[#f7e27c] via-[#e6c75a] to-[#bfa43a] bg-clip-text text-transparent">
            DIVINE ANOMALY
          </h1>
          <button className="border border-[#b4a577] text-[#f5eac9] hover:bg-[#f5eac913] transition duration-300 cursor-pointer py-2.5 px-10">
            LEARN MORE
          </button>
        </header>
        <section className="flex flex-col items-center max-w-3xl text-center mb-20 px-4">
          <h2 className="text-2xl sm:text-5xl font-medium mb-4 tracking-wide text-[#f3e9d2] uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            AN EPIC JOURNEY AWAITS
          </h2>
          <p className="text-base sm:text-lg text-[#e0d6c3] drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
            Step into a realm where reality fractures and shadows come alive. As Aseo, Nahyl, and Retse, 
            you'll navigate a universe of inverted physics and cosmic horrors. Face the living darkness 
            that pulses beneath your feet, wield ancient weapons forged in forgotten forges, and discover 
            the true heart of the anomaly that threatens to consume all existence.
          </p>
        </section>
      </div>
    </div>
  );
}
