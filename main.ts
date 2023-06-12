import { clean_up } from "./lib/clean_up.ts";
import { create_browser } from "./lib/create_browser.ts";
import { load_svg } from "./lib/load_svg.ts";

async function convert(path: string, output: string, background = "#000") {
  const page = await create_browser();
  await load_svg(path, background, page);
  await page.screenshot({
    path: output,
    clip: { height: 200, width: 200, x: 0, y: 0 },
  });
  await clean_up(page);
}

convert("./tester/logo.svg", "./output.png", "#fff");
