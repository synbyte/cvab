"use client"
import Image from 'next/image'
import Colors from './colors';
import Links from './links';
import { useEffect, useState } from 'react';

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      
      <Colors/>
      <Links/>
    </main>
  );
}