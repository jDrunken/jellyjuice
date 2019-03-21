<template>
<div>
    <section class="description title">
        <div class="container">
            <h3 v-html="$t('detail.title')"></h3>
        </div>
    </section>
    <section class="description screenshot">
        <div class="container">
            <no-ssr>
            <carousel class="how to play" :perPageCustom="[[320, 1],[900, 2]]" :mouse-drag="false" :navigationEnabled="true">
                <slide class="items">
                    <div>
                        <img src="../../../assets/images/img-blasterz-movie.jpg" alt="">
                        <a :href="$t('detail.url')" target="_blank" class="play video">play video</a>
                    </div>
                </slide>
                <slide class="items">
                    <div>
                        <img :src="require(`../../../assets/images/img-blasterz-screenshot-${locale}01.jpg`)" alt="">
                    </div>
                </slide>
                <slide class="items">
                    <div>
                        <img :src="require(`../../../assets/images/img-blasterz-screenshot-${locale}skip.jpg`)" alt="">
                    </div>
                </slide>
                <slide class="items">
                    <div>
                        <img :src="require(`../../../assets/images/img-blasterz-screenshot-${locale}03.jpg`)" alt="">
                    </div>
                </slide>
            </carousel>
            </no-ssr>
        </div>
    </section>
    <section class="description script">
        <div class="container">
            <div class="btn_area">
                <!-- <a href="#" class="play ios">iOS Play</a> -->
                <a href="https://play.google.com/store/apps/details?id=com.JellyJuice.Blasterz" target="_blank" class="play aos" >Google Play</a>
                <a href="http://syncmedia.macc.skcdn.com/_assembly/Blasterz-release.apk"  class="download apk" id="download">Android APK</a>
                <!-- <nuxt-link :to="localePath('games-eos-blasterz-play')" class="web">WEB</nuxt-link> -->
            </div>
            <h4>{{ $t('howToPlay') }}</h4>
            <p>{{$t('detail.description1')}}</p>
            <h4>{{ $t('explanation') }}</h4>
            <p>{{$t('detail.description2')}}</p>
        </div>
    </section>
</div>
</template>

<i18n src="../../../locales/eos-blasterz.json" />

<style lang="scss" scoped src="../../../assets/styles/games.eos-blasterz.description.scss"/>
<style lang="scss" src="../../../assets/styles/carousel.scss"></style>


<script>
export default {
    name : 'Description',
    computed : {
        locale () {
            return this.$i18n.locale === 'ko' ? 'ko-' : ''
        }
    }
}
</script>
