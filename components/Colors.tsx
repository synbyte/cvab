
import cheerio from 'cheerio';

async function getColors(): Promise<string|null> {
  const response = await fetch("https://lifelineconnections.org/color-line/", { 
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/html',
      },
    next: { revalidate: 0 },
    cache: 'no-store',
  });
  const content = await response.text();
  const $ = cheerio.load(content);
  const item = $('.cl-line-container').html(); console.log('Colors fetched: ', $('.cl-line-container div').text());
  return item;

}
export default async function Colors() {






  return (
    <>

      <main className='p-3 text-center text-white rounded-2xl  bg-cyan-100 shadow-sm shadow-black'>
        <div className=''>
          <p className='pb-3 text-2xl font-bold text-cyan-800 heading'>Colorline</p>
          <div className='bg-cyan-300 outline outline-offset-2 rounded-sm outline-cyan-600 text-cyan-700 mb-5'><p><strong>Complete <span id='webreport'>Web Report</span> By Wednesday Before Court!</strong></p></div> 
          
          <div className="bg-cyan-700 rounded-lg shadow-md shadow-black border-cyan-500 border-2 p-3  w-5/6 mx-auto" dangerouslySetInnerHTML={{ __html: await getColors() ?? ''}}></div>
          
          <ul><li> </li>
          </ul>
        </div>
      </main>
    </>
  );
}