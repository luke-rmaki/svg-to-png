import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

export async function create_browser() {
  try {
    const browser = await puppeteer.launch({});
    const page = await browser.newPage();
    return page;
  } catch (error) {
    console.log(`There was an error created the Puppeteer instance: ${error}`);
    Deno.exit(1);
  }
}
