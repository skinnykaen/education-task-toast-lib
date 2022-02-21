import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import generatePackageJson from "rollup-plugin-generate-package-json";
import replace from 'rollup-plugin-replace'
import svg from "rollup-plugin-svg";
import svgr from "@svgr/rollup";
import url from "rollup-plugin-url";

const env = process.env.NODE_ENV;

export default {
  input: "src/index.jsx",
  output: {
    file: "dist/bundles/bundle.js",
    format: "cjs",
    globals: { react: 'React', 'react-dom': 'ReactDom', 'styled-components': 'styled',  'react-transition-group': 'ReactTransitionGroup', 'prop-types': 'propTypes'},
  },
  external: ['react', 'react-dom', 'styled-components', 'react-transition-group','prop-types'],
  plugins: [
    resolve({ extensions: [".jsx", ".js", ".tsx"] }),
    commonjs(),
    url(),
    svgr(),
    babel({
      extensions: [".jsx", ".js", ".tsx"],
      exclude: "./node_modules/**",
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
    replace({
      'process.env.NODE_ENV': JSON.stringify(env || 'development'),
    }),
    (env === 'production' && uglify.uglify())
  ],
};
