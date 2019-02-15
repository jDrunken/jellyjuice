<template>
<section class="partnership">
    <Intro />

    <SupportTitle />
    <SmartContract />
    <Marketing/>
    <Funding />

    <CreatorsTitle />
    <CreatorsList />
</section>
</template>

<script>
import Intro from '../components/partnership/Intro.vue'

import SupportTitle from '../components/partnership/support-title.vue'
import SmartContract from '../components/partnership/smart-contract.vue'
import Marketing from '../components/partnership/marketing.vue'
import Funding from '../components/partnership/funding.vue'

import CreatorsTitle from '../components/partnership/creators-title.vue'
import CreatorsList from '../components/partnership/creators-list.vue'

export default {
    name : 'RecentGames',
    components : {
        Intro,
        SupportTitle,
        SmartContract,
        Marketing,
        Funding,
        CreatorsTitle,
        CreatorsList
    }
}
</script>
