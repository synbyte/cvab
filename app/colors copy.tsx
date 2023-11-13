"use client"
import Image from 'next/image'
import './getColors.mjs';
import { useEffect, useState } from 'react';
import getColors from './getColors.mjs';

export default function Colors() {
  const [clValue, setClValue] = useState<string>();

  useEffect(() => {
    getColors().then((item) => {
      setClValue(item);
    });
  }, []);

  return (
    <main className='border min-w-full border-orange-500 border-r-8 text-center text-white shadow-md rounded-lg p-3 bg-slate-600'>
      <div >
        <p className='text-2xl text-orange-200 pb-3 font-bold'>Todays Colorline</p>
      <p className='font-bold'>{clValue}</p>
     
        <ul><li> </li>
        </ul>
      </div>
    </main>
  );
}