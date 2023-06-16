import { dirname, join } from "https://deno.land/std@0.93.0/path/mod.ts";
import { Page } from "puppeteer";
import { Options } from "../types.ts";

export async function load_svg(
  filePath: string,
  options: Options,
  page: Page,
) {
  const html = `
    <html>
      <style>
        body {
          background-color: ${options.background_color || "#fff"};
          margin: 0;
          padding: 0;
        }
        img {
          height: 200px;
          width: 200px;
        }
      </style>
      <body>
        <img src="${filePath}" />
      </body>
    </html>
  `;
  try {
    Deno.writeTextFileSync(`temp.html`, html);
    await page.goto(join(dirname(import.meta.url), "../temp.html"));
  } catch (error) {
    console.log(`There was an error loading the SVG: ${error}`);
    Deno.exit(1);
  }
}
