<template>
<section class="support marketing">
    <div class="container">
        <h3><i>02</i>{{$t('support.type.marketing.title')}}</h3>
        <p>{{$t('support.type.marketing.description')}}</p>
        <ul>
            <li>
                <img src="~assets/images/bnr-support-marketing-eosys-medium.jpg" alt="">
                <h4>{{$t('support.type.marketing.lists.eosys.title')}}</h4>
                <p>{{$t('support.type.marketing.lists.eosys.description')}}</p>
            </li>
            <li>
                <img src="~assets/images/bnr-support-marketing-eosys-decenter.jpg" alt="">
                <h4>{{$t('support.type.marketing.lists.decenter.title')}}</h4>
                <p>{{$t('support.type.marketing.lists.decenter.description')}}</p>
            </li>
            <li>
                <img src="~assets/images/bnr-support-marketing-eosys-partner.jpg" alt="">
                <h4>{{$t('support.type.marketing.lists.refereum.title')}}</h4>
                <p>{{$t('support.type.marketing.lists.refereum.description')}}</p>
            </li>
        </ul>
    </div>
</section>
</template>

<style lang="scss" scoped src="../../assets/styles/partnership.support.scss"></style>

<i18n src="../../locales/partnership.json" />

<script>
export default {
    name : 'Marketing'
}
</script>

