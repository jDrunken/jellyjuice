<template>
    <section class="index">
        <Intro/>
        <RecentGames/>
        <Partners />
    </section>
</template>

<style lang="scss">
</style>

<script>
import Intro from '../components/index/Intro.vue'
import RecentGames from '../components/index/RecentGames.vue'
import Partners from '../components/index/Partners.vue'
export default {
    name : 'index',
    components : {
        Intro,
        RecentGames,
        Partners
    }
}
</script>
