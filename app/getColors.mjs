"use server";
import cheerio from "cheerio";
let cl;
export default async function getColors() {
    const response = await fetch(
    'https://lifelineconnections.org/color-line/'
);
const content =  await response.text();
const $ = cheerio.load(content);
const item = $('div.c-line').text();
cl = item;
console.log(item,"fd");
return item;

    }
