import React from "react";
import { FreutsLogo } from "./FreutsLogo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FreutsLogo className="z-10 h-20 cursor-pointer text-lime-300" />
    </header>
  );
}
