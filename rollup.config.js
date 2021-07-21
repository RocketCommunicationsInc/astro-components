import createDefaultConfig from '@open-wc/building-rollup/modern-config'
import copy from 'rollup-plugin-cpy'
import litcss from 'rollup-plugin-lit-css'
// import multiInput from 'rollup-plugin-multi-input';
import htmlEntry from 'rollup-plugin-html-entry'

const config = createDefaultConfig({
    input: './src/index.html',
})

export default [
    {
        ...config,
        plugins: [
            ...config.plugins,
            htmlEntry(),
            copy([
                { files: 'static/css/*.css', dest: './dist/css' },
                { files: 'static/fonts/**', dest: './dist/fonts' },
                { files: 'static/img/**/*', dest: './dist/img' },
                { files: 'static/favicon.ico', dest: './dist' },
            ]),
            litcss({
                include: ['**/*.css'],
                uglify: true,
            }),
        ],
    },
]
