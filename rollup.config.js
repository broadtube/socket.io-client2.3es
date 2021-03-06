import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';

export default [{
  input: 'dist/socket.io.dev.js',
  output: {
    file: 'dist/socket.io.es.tmp.js',
    format: 'es',
  },
  plugins: [commonjs()]
},{
  input: 'wrapper.mjs',
  output: {
    file: 'dist/socket.io.es.min.js',
    format: 'es',
  },
  plugins: [terser()]
}];
