<template>
<section class="support">
    <div class="container">
        <section class="creaters">
            <h3>{{$t('feature.creators')}}</h3>
            <ul class="bi group">
                <li><a href="https://eosys.io" class="bi eosys">EOSYS</a></li>
                <li><a href="#" class="bi day1">DAY 1</a></li>
            </ul>
        </section>
        <section class="supporters">
            <h3>{{$t('feature.supporters')}}</h3>
            <ul class="bi group">
                <li><a href="https://meet.one/" class="bi meetone">Meet.one</a></li>
                <li><a href="http://eosnova.io/" class="bi nova">NOVA</a></li>
                <li><a href="https://get-scatter.com/" class="bi scatter">Scatter</a></li>
            </ul>
        </section>
    </div>
</section>
</template>

<i18n src="../../../locales/eos-blasterz.json"/>
<style lang="scss" scoped src="../../../assets/styles/games.eos-blasterz.support.scss"></style>

<script>
export default {
    name : 'Support'
}
</script>

