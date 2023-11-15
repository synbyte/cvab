
import cheerio from 'cheerio';

export default async function getColors(): Promise<string | null> {
  let response;
  response = await fetch("https://lifelineconnections.org/color-line/", {
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
