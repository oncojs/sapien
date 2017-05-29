import uglify from "rollup-plugin-uglify";
import { minify } from "uglify-es";
import node from "rollup-plugin-node-resolve";
import replace from "rollup-plugin-replace";

export default {
  globals: {
    react: "React",
    "@oncojs/sapien": "createSapien",
    "@oncojs/react-sapien": "Sapien"
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    node(),
    uglify({}, minify)
  ],
  external: [
    "react",
    "react-dom",
    "d3",
    "@oncojs/sapien",
    "@oncojs/react-sapien"
  ],
  format: "umd",
  treeshake: true
};
