/* eslint-disable import/no-extraneous-dependencies */
const esbuild = require("esbuild");

esbuild.buildSync({
  entryPoints: ["src/index.ts"],
  format: "cjs",
  platform: "browser",
  outdir: "dist/cjs",
  bundle: true,
  sourcemap: true,
  minify: true,
  platform: "node",
  target: ["chrome58", "firefox57", "safari11"],
});
