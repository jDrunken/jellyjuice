<template>
<section class="index intro">
    <div class="container">
        <h2>{{$t('title')}}</h2>
        <p v-html="$t('description')"></p>
    </div>
</section>
</template>

<i18n src="../../locales/index.intro.json"/>
<style lang="scss" scoped src="../../assets/styles/index.intro.scss"></style>

<script>
export default {
    name : 'Intro'
}
</script>

