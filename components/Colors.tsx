"use client"
import getColors from "./getColors"; 

export default async function Colors() {






  return (
    <>

      <main className='p-3 text-center text-white rounded-2xl border border-r-8 border-orange-500 shadow-md colors bg-slate-600'>
        <div >
          <p className='pb-3 text-2xl font-bold text-orange-200 heading'>Colorline</p>
          <p dangerouslySetInnerHTML={{ __html: await getColors()}}></p>

          <ul><li> </li>
          </ul>
        </div>
      </main>
    </>
  );
}