import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'
import pkg from './package.json'
import copy from 'rollup-plugin-copy'
import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/assets/js/index.js',
  plugins: [
    resolve(),
    terser(),
    scss({
      output: 'dist/css/kampmann.min.css',
      outputStyle: 'compressed',
    }),
    copy({
      targets: [
        { src: ['src/assets/fonts/circular/*.woff', 'src/assets/fonts/circular/*.woff2'], dest: 'dist/fonts/circular' },
      ],
    }),
    babel({ babelHelpers: 'bundled' }),
  ],
  output: [
    {
      name: 'kampmann',
      file: pkg.browser,
      format: 'umd',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
}
