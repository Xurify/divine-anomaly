import React from "react";
import Image from "next/image";
import Button from "./Button";
import HamburgerMenu from "./HamburgerMenu";
import { cn } from "@/libs/strings";

const Header: React.FC<{ showSeparateHeader?: boolean }> = ({ showSeparateHeader }) => {
  return (
    <header className={cn("w-full flex flex-col sm:flex-row items-center justify-between", {
        "border-b border-[#b4a57733]": showSeparateHeader,
        "py-3 px-6": showSeparateHeader,
        "pt-3": !showSeparateHeader,
      })}>
      <div className="flex items-center justify-between w-full sm:w-auto mb-0">
        {showSeparateHeader && (
          <div className="flex items-center">
            <div className="mr-4">
              <Image
                src="/images/DivineAnomalyIconTransparent.png"
                alt="Divine Anomaly Logo"
                width={60}
                height={60}
                priority
              />
            </div>
            <h1 className="text-2xl sm:text-3xl font-normal uppercase bg-gradient-to-b from-[#f7e27c] via-[#e6c75a] to-[#bfa43a] bg-clip-text text-transparent">
              DIVINE ANOMALY
            </h1>
          </div>
        )}
        <div className="sm:hidden ml-auto">
          <HamburgerMenu>
            <Button className="w-full text-sm py-2 px-6 justify-center">
              LOGIN
            </Button>
            <Button className="w-full text-sm py-2 px-6 justify-center">
              SUPPORT
            </Button>
          </HamburgerMenu>
        </div>
      </div>

      <div className="hidden sm:flex gap-4">
        <Button className="text-sm py-2 px-6">LOGIN</Button>
        <Button className="text-sm py-2 px-6">SUPPORT</Button>
      </div>
    </header>
  );
};

export default Header;
