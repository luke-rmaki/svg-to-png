import { Page } from "puppeteer";

export async function clean_up(page: Page) {
  try {
    const cleaning = [Deno.remove("temp.html"), page.browser().close()];
    await Promise.all(cleaning);
  } catch (error) {
    console.log(`There was an error cleaning up: ${error}`);
  }
}
