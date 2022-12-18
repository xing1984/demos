/**
 * Created by Xing Zhong.
 * https://github.com/capricorncd
 * https://github.com/xing1984
 * Date: 2022/06/07 23:02:43 (GMT+0900)
 */
import * as path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: path.resolve(
      __dirname,
      '../../xing1984.github.io/demos/js-clip-image'
    ),
  },
});