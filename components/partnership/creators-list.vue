<template>
<section class="creators list">
    <div class="container">
        <ul>
            <li :key="list.name"
                class="bi"
                :class="list.name.toLowerCase()"
                v-for="list in $t('introduce.lists')">
                <h3>{{list.name}}</h3>
                <p>{{list.description}}</p>
            </li>
        </ul>
    </div>
</section>
</template>

<i18n src="../../locales/partnership.json" />

<style lang="scss" scoped src="../../assets/styles/partnership.creator.scss"></style>

<script>
export default {
    name : 'CreatorsList'
}
</script>
