<template>
<section class="partners">
    <div class="container">
        <h2>{{$t('partners')}}</h2>
        <ul class="bi group">
            <li><a href="https://eosys.io" target="_blank" class="eosys bi">EOSYS</a></li>
            <li><a href="#" @click.prevent.self class="day1 bi" disabled>DAY 1</a></li>
            <li><a href="https://meet.one/" class="meetone bi">MeetOne</a></li>
            <li><a href="http://eosnova.io/" class="nova bi">NOVA</a></li>
            <li><a href="https://get-scatter.com/" class="scatter bi">Scatter</a></li>
            <li><a href="#" @click.prevent.self class="numbers bi" disabled>Numbers</a></li>
            <li><a href="https://eosknights.io/" target="_blank" class="eos_knight bi">EOS Knights</a></li>
            <li><a href="http://singames.io/" target="_blank" class="sin_games bi">Sin Games</a></li>
        </ul>
    </div>
</section>
</template>

<i18n src="../../locales/index.partners.json" />
<style lang="scss" scoped src="../../assets/styles/index.partners.scss"></style>

<script>
export default {
    name : 'Partners'
}
</script>
