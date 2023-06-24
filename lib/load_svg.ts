import { dirname, join } from "https://deno.land/std@0.93.0/path/mod.ts";
import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import { Options } from "../types.ts";

export async function load_svg(
  path: string,
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
          height: ${options.height}px;
          width: ${options.width}px;
          margin: 0;
          padding: 0;
        }
      </style>
      <body>
        <img src="${path}" />
      </body>
    </html>
  `;
  try {
    const temp_file_path = join(dirname(Deno.cwd()), "../temp.html");
    Deno.writeTextFileSync(temp_file_path, html);
    await page.goto(`file://${temp_file_path}`);
  } catch (error) {
    console.log(`There was an error loading the SVG: ${error}`);
    Deno.exit(1);
  }
}
