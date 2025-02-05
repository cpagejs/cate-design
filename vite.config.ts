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
    assetsInlineLimit: 100000,
    outDir: "dist", //输出文件目录
    lib: {
      entry: path.resolve(__dirname, "packages/index.ts"), //指定组件编译入口文件
      name: "index",
      fileName: "index",
    },
    rollupOptions: {
      external: ["vue"], // 确保外部化处理那些不想打包进库的依赖
      output: {
        globals: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          vue: "Vue",
        },
      },
    },
  },
});
