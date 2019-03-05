<template>
<section class="play eos-blasterz">
    <div class="container">
        <h2>Eos Blasterz</h2>

        <p v-if="$device.isDesktop" v-html="$t('notice')"></p>

        <p class="image container">
            <img src="../../../assets/images/img-blasterz-screenshot-skip.jpg" alt="">
        </p>
        <div class="btn_area">
            <!-- <a href="#" class="play ios">iOS Play</a> -->
            <a href="#" class="play aos">Google Play</a>
            <a href="#" class="download apk">Android APK</a>
        </div>
    </div>
</section>
</template>

<i18n src="../../../locales/play.json" />

<style lang="scss" scoped src="../../../assets/styles/games.eos-blasterz.play.scss"/>
<style scoped>
p >>> a {
    font-weight: bold;
    color: #ff9000;
}
</style>

<script>
export default {
    name : 'EosBlasterzPlay',
}
</script>

