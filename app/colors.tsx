"use client"
import Image from 'next/image'

import { useEffect, useState } from 'react';

import cheerio from 'cheerio';

export default function Colors() {
  const [clValue, setClValue] = useState('');

  useEffect( () => {
    let cl;
    async function fetchColors() {
      const response = await fetch("https://lifelineconnections.org/color-line/",{mode: 'no-cors'});
      const content = await response.text();
      const $ = cheerio.load(content);
      const item = $('div.c-line').text();
      setClValue(item);
     
    };
    
    fetchColors();
  },[]);
 

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