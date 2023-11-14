"use client"
import Image from 'next/image'
import Colors from '../components/Colors';
import Links from '../components/Links';
import Finder from '@/components/Finder';


export default async function Home() {


  return (
    <main className="flex from-slate-700 to-slate-900 bg-gradient-to-tr min-h-screen flex-col items-center p-5">
      <p className='text-white text-center'>All things Drug Court in one place</p>
      <Colors />
     
      <Links />

      <Finder />
    </main>
  );
}