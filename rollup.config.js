import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
// import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",

        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        export: "named",
      },
    ],
    external: ["styled-components", "prop-types"],
    globals: { "styled-components": "styled" },
    plugins: [
      postcss({ plugins: [], minimize: true }),
      babel(
        {
          exclude: "node_modules/**",
          presets: ["@babel/preset-react"],
        },
        ["babel-plugin-styled-components"]
      ),
      external(),
      resolve(),
      terser(),
    ],
  },
];
