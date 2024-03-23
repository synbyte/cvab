
import cheerio from 'cheerio';

async function getColors(): Promise<string|null> {
  const response = await fetch("https://lifelineconnections.org/color-line/", { 
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/html'
    },
    next: { revalidate: 3600 }
  });
  const content = await response.text();
  const $ = cheerio.load(content);
  const item = $('.cl-line-container').html(); console.log('Colors fetched: ', $('.cl-line-container div').text());
  return item;

}
export default async function Colors() {






  return (
    <>

      <main className='p-3 text-center text-white rounded-2xl     bg-slate-600 shadow-md shadow-black hover:shadow-sm hover:shadow-black transition '>
        <div className=''>
          <p className='pb-3 text-2xl font-bold text-orange-200 heading'>Colorline</p>
          <div className=" font-bold w-5/6 mx-auto" dangerouslySetInnerHTML={{ __html: await getColors() ?? ''}}></div>
          
          <ul><li> </li>
          </ul>
        </div>
      </main>
    </>
  );
}