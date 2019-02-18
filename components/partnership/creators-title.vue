<template>
<section class="creators title">
    <div class="container">
        <h2>{{$t('introduce.title')}}</h2>
        <p v-html="$t('introduce.description')"></p>
    </div>
</section>
</template>

<i18n src="../../locales/partnership.json" />

<style lang="scss" scoped src="../../assets/styles/partnership.creator.scss"></style>

<script>
export default {
    name : 'CreatorsTitle'
}
</script>

