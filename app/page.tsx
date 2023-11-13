"use server"
import Image from 'next/image'
import Colors from './colors';
import Links from './links';
import { useEffect, useState } from 'react';

export default async function Home() {


  return (
    <main className="flex bg-slate-800 min-h-screen flex-col items-center p-5">
      
      <Colors/>
     
      <Links/>
      <div className="border min-w-full border-slate-500 border-r-8 text-center  text-white shadow-md rounded-2xl p-3 bg-slate-600"><p className='text-2xl pb-3 text-orange-200 font-bold'>Group Finder</p><iframe className="" height="600px" width="100%" src="https://www.vancouveraa.org/meetings/" ></iframe></div>
    </main>
  );
}