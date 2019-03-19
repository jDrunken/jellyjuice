<template>
<section class="intro">
    <div class="container">
        <h2>{{$t('intro.title')}}</h2>
        <p>{{$t('intro.description')}}</p>
        <a  href="#download" v-scroll-to="scrollToOption">{{$t('play')}}</a>
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

            if (this.$device.isDesktop) {
                this.scrollToOption.offset = -window.innerHeight + document.querySelector(this.scrollToOption.el).offsetHeight + 40
            } else {
                this.scrollToOption.offset = document.querySelector(this.scrollToOption.el).offsetHeight - window.outerHeight + 20
            }

        },
        // }
    },
    mounted () {
        this.getScrollPosition();
    }
}
</script>
