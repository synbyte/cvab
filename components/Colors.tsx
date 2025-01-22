
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

      <main className='p-3 text-center text-white rounded-2xl  bg-cyan-50/10 backdrop-blur-sm shadow-sm shadow-black'>
        <div className=''>
          <p className='pb-3 text-2xl font-bold text-cyan-800 heading'>Colorline</p>
          <div className='bg-cyan-400 outline outline-offset-2 rounded-sm mx-10 outline-cyan-600 text-cyan-700 mb-5 text-sm'><p><strong>Complete <span className="text-orange-600">Web Report</span> by Wednesday before court <span className="text-orange-600">6pm</span>(DOSA) or <span className="text-orange-600">12pm</span>(DC)!</strong></p></div> 
          
          <div className="bg-cyan-700 rounded-lg shadow-sm shadow-black border-cyan-500 border-2 p-3  w-5/6 mx-auto" dangerouslySetInnerHTML={{ __html: await getColors() ?? ''}}></div>
          
          <ul><li> </li>
          </ul>
        </div>
      </main>
    </>
  );
}