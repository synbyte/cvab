

import cheerio from 'cheerio';

async function getColors(): Promise<string | null> {
  const response = await fetch("https://lifelineconnections.org/color-line/", { next: { revalidate: 3600 } });
  const content = await response.text();
  const $ = cheerio.load(content);
  const item = $('.cl-line-container').html(); console.log('Colors fetched: ', $('.cl-line-container div').text());
  return item;

}
export default async function Colors() {






  return (
    <>

      <main className='colors border min-w-full border-orange-500 border-r-8 text-center text-white shadow-md rounded-2xl p-3 bg-slate-600'>
        <div >
          <p className='text-2xl heading text-orange-200 pb-3 font-bold'>Colorline</p>
          <p dangerouslySetInnerHTML={{ __html: await getColors() }}></p>

          <ul><li> </li>
          </ul>
        </div>
      </main>
    </>
  );
}