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
    loading: true,
    css : [
        'assets/styles/route.scss'
    ],
    modules : [
        '@nuxtjs/style-resources',
        [
            '@nuxtjs/component-cache',
            {
                maxAge: 1000 * 60 * 60
            }
        ],
        [
            'nuxt-i18n', {
                locales: [
                    {
                        code: 'en',
                        iso: 'en-US',
                        name: 'English'
                    },
                    {
                        code: 'ko',
                        iso: 'ko-KR',
                        name : '한글'
                    },
                    {
                        code: 'zh',
                        iso: 'zh-CN',
                        name: '中文'
                    }
                ],
                strategy: 'prefix',
                enableInSFC: true,
                vueI18n: {
                    fallbackLocale: 'ko'
                },
                detectBrowserLanguage: {
                    useCookie: true,
                    cookieKey: 'i18n_redirected',
                    alwaysRedirect: false
                },
                vueI18nLoader: true,
                defaultLocale: 'ko',
                vuex: {
                    // Module namespace
                    moduleName: 'i18n',

                    // Mutations config
                    mutations: {
                        // Mutation to commit to store current locale, set to false to disable
                        setLocale: 'I18N_SET_LOCALE',

                        // Mutation to commit to store current message, set to false to disable
                        setMessages: 'I18N_SET_MESSAGES'
                    },

                    // PreserveState from server
                    preserveState: false
                }
            }
        ]
    ],

    // 플러그인 설정
    plugins: [
        {
            src: '~/plugins/vue-carousel.js',
            ssr: false
        }
    ],

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
    },
    router : {
        scrollBehavior(to, from, savedPosition) {
            // debugger
            let position = false

            // if no children detected
            if (to.matched.length < 2) {
                // scroll to the top of the page
                position = { x: 0, y: 0 }
            } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
                // if one of the children has scrollToTop option set to true
                position = { x: 0, y: 0 }
            }

            // savedPosition is only available for popstate navigations (back button)
            if (savedPosition) {
                position = savedPosition
            }

            return new Promise(resolve => {
                // wait for the out transition to complete (if necessary)
                window.$nuxt.$once('triggerScroll', () => {
                    // coords will be used if no selector is provided,
                    // or if the selector didn't match any element.
                    if (to.hash && document.querySelector(to.hash)) {
                        // scroll to anchor by returning the selector
                        position = { selector: to.hash }
                    }
                    resolve(position)
                })
            })
        }
    },
    devserver : {
        host: '0,0,0,0'
    },

    // -----------------------------------------
    // 커스텀 설정
    // -----------------------------------------
    // 전역으로 사용할 설정을 미리 불러온다.
    styleResources: {
        scss: [
            '~/assets/styles/env.scss',
            '~/assets/styles/variable.scss',
            '~/assets/styles/font.scss',
            '~/assets/styles/common.scss'
        ]
    },

}
