"use client"


import cheerio from 'cheerio';

async function getColors() {
  const response = await fetch("https://lifelineconnections.org/color-line/",{next: {revalidate: 3600}});
  const content = await response.text();
  const $ = cheerio.load(content);
  const item = $('.cl-line-container').html();console.log(item);
  return item;
  
}
export default async function Colors() {
 
  const c = await getColors();

  
 

  return (
    <main className='border min-w-full border-orange-500 border-r-8 text-center text-white shadow-md rounded-2xl p-3 bg-slate-600'>
      <div >
        <p className='text-2xl text-orange-200 pb-3 font-bold'>Todays Colorline</p>
      <p dangerouslySetInnerHTML={{__html: c}} className='font-bold'></p>
     
        <ul><li> </li>
        </ul>
      </div>
    </main>
  );
}