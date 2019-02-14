module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'JellyJuice',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // loading progress bar
    loading: false,
    modules : [
        '@nuxtjs/style-resources',
        [
            '@nuxtjs/component-cache',
            {
                maxAge: 1000 * 60 * 60
            }
        ]
    ],

    // 전역으로 사용할 설정을 미리 불러온다.
    styleResources: {
        scss: [
            '~/assets/styles/env.scss',
            '~/assets/styles/variable.scss',
            '~/assets/styles/font.scss',
            '~/assets/styles/common.scss'
        ]
    },
    build: {
        /*
         ** Run ESLint on save
         */
        fontUrl: { limit: 1000 },
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        postcss : {
            preset : {
                autoprefixer : {
                    browsers: ['last 2 versions', 'ie 11'],
                    expand: true,
                    grid:true,
                }
            }
        },
    },
    generate : {
        fallback : false
    }
}
