<template>
<section class="support contract">
    <div class="container">
        <section>
            <h3><i>01</i>{{$t('support.type.contract.title')}}</h3>
            <p>{{$t('support.type.contract.description')}}</p>
            <a href="#" target="_blank">{{$t('support.type.contract.link')}}</a>
        </section>
        <div class="image wrapper">
            <img src="~assets/images/bnr-support-smart-contract-color@2x.png" alt="">
            <img src="~assets/images/bnr-support-smart-contract-mono@2x.png" alt="">
        </div>
    </div>
</section>
</template>

<i18n src="../../locales/partnership.json" />

<style lang="scss" scoped src="../../assets/styles/partnership.support.scss"></style>

<script>
export default {
    name : 'SmartContract'
}
</script>
