import { join } from 'path';
import { nodeResolve } from '@rollup/plugin-node-resolve'; // 第三方模块
import { terser } from 'rollup-plugin-terser'; // 压缩js

export default {
  input: join(__dirname, '..', 'src/components/index.ts'),
  output: {
    format: 'esm',
    file: 'lib/esm/index.js',
    name: 'ui-vue',
    exports: 'named',
  },
  plugins: [terser(), nodeResolve()],
};
