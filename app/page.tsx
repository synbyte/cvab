"use client"
import Image from 'next/image'
import Colors from '../components/Colors';
import Links from '../components/Links';
import Finder from '@/components/Finder';


export default async function Home() {


  return (
    <main className="items-center p-5 min-w-full min-h-screen bg-gradient-to-tr  from-slate-700 to-slate-900">
      <p className='text-center text-white'>All things Drug Court in one place</p>
      <div className='grid mx-auto md:grid-cols-2 md:w-5/6 gap-4'> 
        <Colors />

        <Links />
      </div>
      <Finder />
    </main>
  );
}