<template>
<section class="partnership">
    <Intro />
    <Support />
    <Introduce />
</section>
</template>

<style lang="scss"></style>

<script>
import Intro from '../components/partnership/Intro.vue'
import Support from '../components/partnership/Support.vue'
import Creater from '../components/partnership/Creater.vue'
export default {
    name : 'RecentGames',
    components : {
        Intro,
        Support,
        Creater
    }
}
</script>
