<template>
<section class="games">
    <Intro />
    <description />
    <Support />
</section>
</template>

<style lang="scss"></style>

<script>
import Intro from '../../components/games/eos-blaterz/Intro.vue'
import Description from '../../components/games/eos-blaterz/Description.vue'
import Support from '../../components/games/eos-blaterz/Support.vue'

export default {
    name : 'Games',
    components : {
        Intro,
        Description,
        Support
    }
}
</script>
