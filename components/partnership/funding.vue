<template>
<section class="support funding">
    <div class="container">
        <section>
            <h3><i>03</i>{{$t('support.type.resource.title')}}</h3>
            <p>{{$t('support.type.resource.description')}}</p>
            <a href="https://www.officialdia.com/" target="_blank">{{$t('support.type.resource.link')}}</a>
        </section>
        <div class="image wrapper">
            <img src="~assets/images/bnr-support-funding-color.jpg" alt="">
            <img src="~assets/images/bnr-support-funding-mono.jpg" alt="">
        </div>
    </div>
</section>
</template>

<i18n src="../../locales/partnership.json" />

<style lang="scss" scoped src="../../assets/styles/partnership.support.scss"></style>

<script>
export default {
    name : 'Funding'
}
</script>

