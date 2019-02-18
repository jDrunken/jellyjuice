<template>
<section class="intro">
    <div class="container">
        <h2>{{$t('intro.title')}}</h2>
        <p>{{$t('intro.description')}}</p>
        <a href="#">Play now</a>
    </div>
</section>
</template>

<style lang="scss" scoped src="../../../assets/styles/games.eos-blasterz.intro.scss"></style>

<i18n src="../../../locales/eos-blasterz.json"/>

<script>
export default {
    name : 'Intro',
}
</script>
