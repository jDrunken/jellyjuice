<template>
<footer>
    <div class="container">
        <h2>jellyjuice</h2>
        <ul class="communication channel">
            <li>
                <a href="http://t.me/EOSYSIOKR" class="sns telegram" target="_blank">telegram</a>
            </li>
            <li>
                <a href="https://twitter.com/eosys_io" class="sns twitter" target="_blank">twitter</a>
            </li>
        </ul>
        <div class="copyright and address">
            JellyJuice <span class="bar">|</span> <a href="mailto:dappstudio@eosys.io">dappstudio@eosys.io</a>
            <address>{{$t('info')}}</address>
            <p class="copyright">{{$t('copyright')}}</p>
        </div>
    </div>
</footer>
</template>

<style lang="scss" scoped src="~/assets/styles/footer.scss"></style>

<i18n src="../locales/footer.json"/>

<script>
export default {
    name : 'Footer'
}
</script>

