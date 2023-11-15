"use client"
import Image from 'next/image'
import Colors from '../components/Colors';
import Links from '../components/Links';
import Finder from '@/components/Finder';


export default async function Home() {


  return (
    <main className=" min-w-full from-slate-700 to-slate-900 bg-gradient-to-tr min-h-screen items-center p-5">
      <p className='text-white text-center'>All things Drug Court in one place</p>
      <div className='grid mx-auto md:grid-cols-2 md:w-5/6 gap-4'> 
        <Colors />

        <Links />
      </div>
      <Finder />
    </main>
  );
}