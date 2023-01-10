/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-white-800 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">Word Wander</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <Link href="/category"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Login</span></Link>
          <Link href="/category"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">About Us</span></Link>
          <Link href="/category"><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">Home</span></Link>


        </div>
      </div>
    </div>
  );
};

export default Header;
