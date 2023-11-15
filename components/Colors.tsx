

import cheerio from 'cheerio';

async function getColors(): Promise<string|null> {
  const response = await fetch("https://lifelineconnections.org/color-line/", { next: { revalidate: 3600 } });
  const content = await response.text();
  const $ = cheerio.load(content);
  const item = $('.cl-line-container').html(); console.log('Colors fetched: ', $('.cl-line-container div').text());
  return item;

}
export default async function Colors() {






  return (
    <>

      <main className='p-3 text-center text-white rounded-2xl border border-r-8 border-orange-500 shadow-md colors bg-slate-600'>
        <div >
          <p className='pb-3 text-2xl font-bold text-orange-200 heading'>Colorline</p>
          <p dangerouslySetInnerHTML={{ __html: await getColors() ?? 'No Colors/Closed'}}></p>

          <ul><li> </li>
          </ul>
        </div>
      </main>
    </>
  );
}