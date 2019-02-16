<template>
<header :class="[page,{reflection : isReflection}]">
    <div class="container">
        <h1>
            <nuxt-link to="/">
                Jelly Juice
            </nuxt-link>
        </h1>
        <div class="wrapper">
            <button type="button" class="mobile menu display" role="button" aria-hidden="hidden">메뉴 열기/닫기</button>
            <nav>
                <ul>
                    <li class="games" :class="{expand : isExpandMenu}" v-on:mouseleave="shrinkMenuGame">
                        <button type="button" v-on:mouseenter="expandMenuGame">games</button>
                        <transition name="fade">
                        <ul v-if="isExpandMenu">
                            <li><nuxt-link to="/games/eos-blasterz/">EOS Blasterz</nuxt-link></li>
                        </ul>
                        </transition>
                    </li>
                    <li class="partnership">
                        <nuxt-link to="/partnership">Partnership</nuxt-link>
                    </li>
                </ul>
            </nav>
            <div class="locale change">
                <button type="button" class="status">lang</button>
                <ul>
                    <li><a href="#">Korean</a></li>
                    <li><a href="#">English</a></li>
                    <li><a href="#">Chinese</a></li>
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
        '$route' (to, from) {
            this.isExpandMenu = false
            this.page = this.$route.name
        }
    },
    methods : {
        viewReflection () {
            return this.isReflection = this.$store.state.scrollPosition < 1 ? false : true
        },
        expandMenuGame () {
            this.isExpandMenu = true
        },
        shrinkMenuGame () {
            this.isExpandMenu = false
        }
    },
    mounted () {
        // 현재 페이지 이름을 받아와서 스타일링 하는데 쓴다.
        this.page = this.$route.name
        this.scrollTop = this.$store.state.scrollTop
        window.addEventListener('scroll',this.viewReflection)
    },
    destroyed () {
        window.removeEventListener('scroll',this.viewReflection)
    }
}
</script>
