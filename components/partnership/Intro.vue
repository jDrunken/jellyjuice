<template>
<section class="partnership intro">
    <div class="container">
        <div class="container">
            <h2 v-html="$t('intro.title')"></h2>
            <p v-html="$t('intro.description')"></p>
            <a href="mailto:eosys@eosys.io" class="submit button">{{$t('intro.link')}}</a>
        </div>
    </div>
</section>
</template>

<i18n src="../../locales/partnership.json"/>
<style lang="scss" scoped src="../../assets/styles/partnership.intro.scss"></style>

<script>
export default {
    name : 'Intro'
}
</script>
