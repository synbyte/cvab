"use client"
import Image from 'next/image'
import cl from './getColors.mjs';
import { useEffect, useState } from 'react';

export default function Colors() {
  const [clValue, setClValue] = useState<string>();

  useEffect(() => {
    cl().then((value) => {
      setClValue(value);
    });
  }, []);

  return (
    <main className='border min-w-full border-orange-500 border-r-8 text-center text-white shadow-md rounded-lg p-3 bg-slate-600'>
      <div >
        <p className='text-sm pb-3 underline'>Todays Colorline</p>
      {clValue}
     
        <ul><li> <a href="https://treatment-court.clark.wa.gov/?id=1"><button className="outline outline-1 bg-orange-500 hover:bg-orange-700 text-white py-1 my-3 px-1 rounded">Web Report</button></a></li>
        </ul>
      </div>
    </main>
  );
}