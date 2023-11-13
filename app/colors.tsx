"use client"
import Image from 'next/image'

import { useEffect, useState } from 'react';

import cheerio from 'cheerio';

async function getData() {
  const response = await fetch("https://lifelineconnections.org/color-line/",{mode: 'no-cors'});
  const content = await response.text();
  const $ = cheerio.load(content);
  const item = $('div.c-line').text();
  return item;
}
export default async function Colors() {
 
  const c = await getData();

  
 

  return (
    <main className='border min-w-full border-orange-500 border-r-8 text-center text-white shadow-md rounded-lg p-3 bg-slate-600'>
      <div >
        <p className='text-2xl text-orange-200 pb-3 font-bold'>Todays Colorline</p>
      <p className='font-bold'>{c}</p>
     
        <ul><li> </li>
        </ul>
      </div>
    </main>
  );
}