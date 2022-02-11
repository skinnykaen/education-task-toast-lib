import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import generatePackageJson from "rollup-plugin-generate-package-json";
import svg from "rollup-plugin-svg";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";

export default {
  input: "src/index.jsx",
  output: {
    file: "dist/bundles/bundle.js",
    format: "cjs",
  },
  external: ["react", "react-dom", "styled-components"],
  plugins: [
    resolve({ extensions: [".jsx", ".js", ".tsx"] }),
    commonjs(),
    url(),
    svgr(),
    babel({
      extensions: [".jsx", ".js", ".tsx"],
      exclude: "node_modules/**",
    }),
    generatePackageJson({
      outputFolder: "dist",
      baseContents: (pkg) => ({
        name: pkg.name,
        main: "bundles/bundle.js",
        peerDependencies: {
          react: "^16.13.1",
        },
      }),
    }),
  ],
};
