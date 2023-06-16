import { clean_up } from "./lib/clean_up.ts";
import { converter } from "./lib/coverter.ts";
import { create_browser } from "./lib/create_browser.ts";
import { load_svg } from "./lib/load_svg.ts";
import { Options } from "./types.ts";

export default async function convert(
  input: string,
  output: string,
  options: Options,
) {
  console.log(import.meta.url)
  const page = await create_browser();
  await load_svg(input, options, page);
  await converter(page, output, options);
  await clean_up(page);
}
