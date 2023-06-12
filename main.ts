import puppeteer from "puppeteer";

const browser = await puppeteer.launch({});
const page = await browser.newPage();
await page.goto("https://jw.org");
console.log(page.url());
console.log("running");
