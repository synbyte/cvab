"use client"
import Image from 'next/image'
import Colors from './colors';
import Links from './links';
import { useEffect, useState } from 'react';


export default async function Home() {


  return (
    <main className="flex from-slate-700 to-slate-900 bg-gradient-to-tr min-h-screen flex-col items-center p-5">
      <p className='text-white text-center'>All things Drug Court in one place</p>
      <Colors />

      <Links />
      <div className="border min-w-full border-slate-500 border-r-8 text-center  text-white shadow-md rounded-2xl p-3 bg-slate-600"><p className='text-2xl pb-3 heading text-orange-200 font-bold'>Group Finder</p><iframe className="" height="600px" width="100%" src="https://www.vancouveraa.org/meetings/" ></iframe></div>
    </main>
  );
}