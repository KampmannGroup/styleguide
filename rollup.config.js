import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'
import pkg from './package.json'
import copy from 'rollup-plugin-copy'

export default {
  input: 'src/assets/js/index.js',
  plugins: [
    terser(),
    scss({
      output: 'dist/css/kampmann.min.css',
      outputStyle: 'compressed',
    }),
    copy({
      targets: [{ src: ['src/assets/fonts/**/*.woff', 'src/assets/fonts/**/*.woff2'], dest: 'dist/fonts' }],
    }),
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
