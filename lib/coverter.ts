import { Page } from "puppeteer";
import { Options } from "../types.ts";

export async function converter(page: Page, output: string, options: Options) {
  await page.screenshot({
    path: output,
    clip: { height: options.height, width: options.width, x: 0, y: 0 },
  });
}
