"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, MenuItem, ProductItem, HoveredLink } from "../ui/navbar-menu";

const NavBar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="bg-black text-white fixed top-7 left-1/2 transform -translate-x-1/2 w-3/4 z-50 rounded-[50px]">
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href="/tools">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Tools"
          ></MenuItem>
        </Link>
        <Link href="/community">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Community"
          ></MenuItem>
        </Link>
        <Link href="/FAQ">
          <MenuItem
            setActive={setActive}
            active={active}
            item="FAQs"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default NavBar;
