import React from "react";
import { FreutsLogo } from "./FreutsLogo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FreutsLogo className="z-10 lg:h-20 sm:h-10 md:h-15 cursor-pointer text-lime-300" />
    </header>
  );
}
