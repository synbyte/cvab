"use server";
import cheerio from "cheerio";
let cl;
export default async function getColors() {
    const response = await fetch(
    'https://lifelineconnections.org/color-line/'
);
const content =  await response.text();
const $ = cheerio.load(content);
const item = $('.cl-line-container p').text();
cl = item;
return cl;
    }
