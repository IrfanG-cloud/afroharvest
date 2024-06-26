'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuIcon } from '@heroicons/react/solid';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <nav className="bg-[#7bb57e]">
      <div className="mx-auto flex justify-between items-center px-4 md:px-8">
        <div>
          <Link href="/">
            <div className="flex items-center">
              <Image src="/logo.png" alt="logo" width={100} height={100} />
            </div>
          </Link>
        </div>
        {/* Hamburger Icon (hidden on medium and above screens) */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <MenuIcon className="h-6 w-6 text-black" />
        </button>
        {/* Mobile Menu (visible on small screens) */}
        <ul className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link href="/product">
              <div className="text-black text-[20px] border-b-2 border-yellow-500 hover:text-yellow-500 hover:">Product & Service</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="text-black text-[20px] hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500">About</div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div className="text-black text-[20px] hover:text-yellow-500 hover:border-b-2 hover:border-yellow-500">Contact</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
