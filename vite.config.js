import path from "path";
export default {
  optimizeDeps: {
    include: [path.resolve(__dirname, "src/js/index.js")],
  },
  base: "./",
};
