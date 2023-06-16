import { Page } from 'https://deno.land/x/puppeteer@16.2.0/mod.ts' ;

export async function clean_up(page: Page) {
  try {
    const cleaning = [Deno.remove("temp.html"), page.browser().close()];
    await Promise.all(cleaning);
  } catch (error) {
    console.log(`There was an error cleaning up: ${error}`);
  }
}
