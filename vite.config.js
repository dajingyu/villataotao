/*
 * @Description:
 * @Author: xu tao
 * @Date: 2022-08-10 15:36:57
 * @LastEditors: xu tao
 * @LastEditTime: 2022-08-11 14:03:33
 */
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
function pathResolve(dir) {
  return resolve(__dirname, '.', dir);
}

export default defineConfig({
  base: '',
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 配置文件别名
  resolve: {
    alias: {
      '@': pathResolve('src'),
    },
  },
  // 打包配置
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'static', // 指定生成静态资源的存放路径
  },
  // 本地运行配置，及反向代理配置
  server: {
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    // proxy: {
    //     '/api': {
    //         target: 'http://192.168.0.2:8080',
    //         changeOrigin: true,
    //         rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
});
