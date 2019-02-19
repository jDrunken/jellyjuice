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
                        <img src="../../../assets/images/img-blasterz-movie@2x.png" alt="">
                        <a :href="$t('detail.url')" target="_blank" class="play video">play video</a>
                    </div>
                </slide>
                <slide class="items">
                    <div>
                        <img src="../../../assets/images/img-blasterz-screenshot-01@2x.png" alt="">
                    </div>
                </slide>
                <slide class="items">
                    <div>
                        <img src="../../../assets/images/img-blasterz-screenshot-02@2x.png" alt="">
                    </div>
                </slide>
                <slide class="items">
                    <div>
                        <img src="../../../assets/images/img-blasterz-screenshot-03@2x.png" alt="">
                    </div>
                </slide>
            </carousel>
            </no-ssr>
        </div>
    </section>
    <section class="description script" id="download">
        <div class="container">
            <p>{{$t('detail.description')}}</p>
            <div class="btn_area">
                <a href="#" class="play ios">IOS Play</a>
                <a href="#" class="play aos">Google Play</a>
                <a href="#" class="download apk">Android APK</a>
                <nuxt-link :to="localePath('games-eos-blasterz-play')" class="web">WEB</nuxt-link>
            </div>
        </div>
    </section>
</div>
</template>

<i18n src="../../../locales/eos-blasterz.json" />

<style lang="scss" scoped src="../../../assets/styles/games.eos-blasterz.description.scss"/>
<style lang="scss" src="../../../assets/styles/carousel.scss"></style>


<script>
export default {
    name : 'Description'
}
</script>
