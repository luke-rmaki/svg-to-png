# SVG-TO-PNG

This package is used to convert svg files to png files. It uses Puppeteer for
rendering and capturing the SVG.

## Usage

```js
import convert from "https://deno.land/x/svg_to_png/mod.ts";

await convert("path/to/svg/file.svg", "path/to/png/file.png", Options);
```

## Options

| Option           | Type   | Default | Description                          |
| ---------------- | ------ | ------- | ------------------------------------ |
| width            | number |         | Width of the output image            |
| height           | number |         | Height of the output image           |
| background_color | string | #ffffff | Background color of the output image |

<br />

## Example

```js
import convert from "https://deno.land/x/svg_to_png/mod.ts";

await convert("path/to/svg/file.svg", "path/to/png/file.png", {
  width: 100,
  height: 100,
  background_color: "#000000",
});
```
