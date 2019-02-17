<template>
<header :class="[page,{reflection : isReflection}]">
    <div class="container">
        <h1>
            <nuxt-link :to="'/'+$i18n.locale" >
                Jelly Juice
            </nuxt-link>
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
                        <button type="button">games</button>
                        <ul>
                            <li>
                                <nuxt-link :to="'/' + $i18n.locale + '/games/eos-blasterz'">
                                    EOS Blasterz
                                </nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <li class="partnership">
                        <nuxt-link :to="'/' + $i18n.locale + '/partnership'">Partnership</nuxt-link>
                    </li>
                </ul>
            </nav>
            <div class="locale change">
                <button type="button"
                        class="status"
                        v-for="locale in $i18n.locales"
                        :key="locale.code">
                    {{locale.name}}
                </button>

                <ul>
                    <li v-for="locale in $i18n.locales" :key="locale.code">
                        <nuxt-link
                            :to="switchLocalePath(locale.code)"
                            :class="locale.code">
                            {{ locale.name }}
                         </nuxt-link>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</header>
</template>

<style lang="scss" scoped src="../assets/styles/header.scss"></style>

<script>
import { directive as onClickaway } from 'vue-clickaway';

export default {
    name : 'Header',
    directives: {
        onClickout: onClickaway,
    },
    data : () => ({
        page : '/',
        isReflection : false,
        isExpandMenu : false
    }),
    watch : {
        '$route' () {
            this.isExpandMenu = false
            this.page = this.$route.name.replace(/_/g,'').replace(/(ko|en|zh)/g,'')
        }
    },
    methods : {
        viewReflection () {
            return this.isReflection = this.$store.state.scrollPosition <= 0 ? false : true
            // let scroll = (window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0))
            // return this.isReflection = scroll < 0 ? false : true
        },
        toggleMenu () {
            this.isExpandMenu = !!this.isExpandMenu ? false : true
        },
    },
    mounted () {
        // 현재 페이지 이름을 받아와서 스타일링 하는데 쓴다.
        this.page = this.$route.name.replace(/_/g,'').replace(/(ko|en|zh)/g,'')
        window.addEventListener('scroll',this.viewReflection)
    },
    destroyed () {
        window.removeEventListener('scroll',this.viewReflection)
    }
}
</script>
