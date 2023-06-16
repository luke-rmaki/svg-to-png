import { dirname, join } from "https://deno.land/std@0.93.0/path/mod.ts";
import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
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
    const temp_file_path = join(dirname(Deno.cwd()), "../temp.html");
    console.log(`Temp file created at: ${temp_file_path}`)
    Deno.writeTextFileSync(temp_file_path, html);
    await page.goto(temp_file_path);
  } catch (error) {
    console.log(`There was an error loading the SVG: ${error}`);
    Deno.exit(1);
  }
}
