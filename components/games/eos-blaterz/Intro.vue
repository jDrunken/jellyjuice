<template>
<section class="intro">
    <div class="container">
        <h2>{{$t('intro.title')}}</h2>
        <p>{{$t('intro.description')}}</p>
        <nuxt-link v-if="$device.isDesktop" :to="localePath('games-eos-blasterz-play')">{{$t('play')}}</nuxt-link>
        <a v-else href="#download" v-scroll-to="scrollToOption">{{$t('download')}}</a>
    </div>
</section>
</template>

<style lang="scss" scoped src="../../../assets/styles/games.eos-blasterz.intro.scss"></style>

<i18n src="../../../locales/eos-blasterz.json"/>

<script>
export default {
    name : 'Intro',
    data : () => ({
        scrollToOption : {
            el : '#download',
            offset : 0
        }
    }),
    methods : {
        getScrollPosition () {
            this.scrollToOption.offset = document.querySelector(this.scrollToOption.el).offsetHeight - window.outerHeight
        }
    },
    mounted () {
        this.getScrollPosition();
    }
}
</script>
