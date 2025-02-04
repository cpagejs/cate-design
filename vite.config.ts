import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern",
        // additionalData: `@use "${path.resolve(
        //   __dirname,
        //   "./packages/assets/styles/variable.scss"
        // )}";`,
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        // 指定入口文件，可以是一个对象，键是入口名称，值是入口文件的路径
        main: path.resolve(__dirname, "packages/index.ts"),
      },
      output: {
        // 指定输出文件名
        entryFileNames: "index.js",
        // 指定输出目录
        dir: "dist",
        // 代码分割文件名格式
        chunkFileNames: "[name].js",
        // 静态资源输出文件名
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
