"use client";
import Link from "next/Link";
import { use, useState } from "react";
import Reservaiton from "./resevation";
import Image from "next/image";

const Header = () => {
  const [res, setres] = useState(false);
  return (
    <header className=" text-black py-4 px-6 flex i justify-between items-center max-w-[88rem] m-auto">
      <div>
        <Link href="/" className="text-xl font-semibold">
          <Image src="/logo.png" alt="Logo" width={200} height={200} />
        </Link>
      </div>
      <nav>
        <ul className="flex items-center space-x-4">
          <li>
            <Link
              href="/menu"
              className="hover:border-yellow-400 rounded-xl border-2 p-4 border-white transition-all duraiton-700"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/order"
              className="hover:border-yellow-400 rounded-xl border-2 p-4 border-white transition-all duraiton-700"
            >
              Online order
            </Link>
          </li>
          <li>
            <div
              className="rounded-xl bg-yellow-500 p-4 cursor-pointer"
              onClick={() => {
                setres(true);
              }}
            >
              Reserve a table
            </div>
            <Reservaiton trigger={res} setTrigger={setres} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
