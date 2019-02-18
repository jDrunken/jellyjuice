<template>
<section class="recent games">
    <div class="container">
        <h2>{{$t('title')}}</h2>
        <ol>
            <li class="eos-blasterz">
                <div>
                    <h3>{{$t('eos-blasterz.title')}}</h3>
                    <p :key="description.index" v-for="description in $t('eos-blasterz.descriptions')">{{description}}</p>
                    <nuxt-link :to="localePath('games-eos-blasterz')">{{$t('learn-more')}}</nuxt-link>
                </div>
            </li>
            <li class="eos-to-the-moon">
                <div>
                    <h3>{{$t('eos-to-the-moon.title')}}</h3>
                    <p :key="description.index" v-for="description in $t('eos-to-the-moon.descriptions')">{{description}}</p>
                    <a href="#" @click.prevent.self disabled>{{$t('comming-soon')}}</a>
                </div>
            </li>
        </ol>
    </div>
</section>
</template>

<style lang="scss" scoped src="~/assets/styles/index.recent-games.scss"></style>

<i18n src="../../locales/index.recent-games.json"/>

<script>
export default {
    name : 'RecentGames'
}
</script>
