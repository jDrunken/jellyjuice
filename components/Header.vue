<template>
<header :class="[page,{reflection : isReflection}]">
    <div class="container">
        <h1>
            <nuxt-link :to="localePath('index')">Jelly Juice</nuxt-link>
        </h1>
        <button type="button"
                class="mobile menu display"
                role="button"
                aria-hidden="hidden"
                v-on:click="toggleMenu()"
                :class="{expand : isExpandMenu}">
            메뉴 열기/닫기
        </button>
        <div class="wrapper" :class="{expand : isExpandMenu}">
            <nav>
                <ul>
                    <li class="games">
                        <button type="button" :class="page === 'games-eos-blasterz' ? 'viewing' : null">games</button>
                        <ul>
                            <li>
                                <nuxt-link :to="localePath('games-eos-blasterz')">
                                    EOS Blasterz
                                </nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <li class="partnership" :class="page === 'partnership' ? 'viewing' : null">
                        <nuxt-link :to="localePath('partnership')">
                            Partnership
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
            <div class="locale change">
                <button type="button" :class="$i18n.locale" @click="toggleLocale()">{{ $t('locale') }}</button>
                <ul v-if="isExpandLocale">
                    <li><nuxt-link :to="switchLocalePath('ko')" v-if="$i18n.locale !== 'ko'" class="ko">한글</nuxt-link></li>
                    <li><nuxt-link :to="switchLocalePath('en')" v-if="$i18n.locale !== 'en'" class="en">English</nuxt-link></li>
                    <li><nuxt-link :to="switchLocalePath('zh')" v-if="$i18n.locale !== 'zh'" class="zh">中文</nuxt-link></li>
                </ul>

            </div>
        </div>
    </div>
</header>
</template>

<style lang="scss" scoped src="../assets/styles/header.scss"></style>

<i18n src="../locales/header.json"/>

<script>
export default {
    name : 'Header',
    data : () => ({
        page : '/',
        isReflection : false,
        isExpandMenu : false,
        isExpandLocale : false
    }),
    watch : {
        '$route' () {
            this.isExpandMenu = false
            this.page = this.$route.name.replace(/_/g,'').replace(/(ko|en|zh)/g,'')
        }
    },
    computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    },
    methods : {
        viewReflection () {
            // return this.isReflection = this.$store.state.scrollPosition <= 0 ? false : true
            let scroll = (window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0))
            this.isExpandLocale = false;
            return this.isReflection = scroll <= 0 ? false : true
        },
        toggleMenu () {
            this.isExpandMenu = !!this.isExpandMenu ? false : true
        },
        toggleLocale () {
            this.isExpandLocale = !!this.isExpandLocale ? false : true
        }
    },
    mounted () {
        // 현재 페이지 이름을 받아와서 스타일링 하는데 쓴다.
        this.page = this.$route.name.replace(/_/g,'').replace(/(ko|en|zh)/g,'')
        window.addEventListener('scroll',this.viewReflection)
        window.addEventListener('DOMContentLoaded', this.viewReflection)
        console.log(this.$i18n.locales)
    },
    destroyed () {
        window.removeEventListener('scroll',this.viewReflection)
    },
}
</script>
