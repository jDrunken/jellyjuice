<template>
<header :class="page">
    <div class="container">
        <h1>
            <nuxt-link to="/">
                Jelly Juice
            </nuxt-link>
        </h1>
        <nav>
            <ul>
                <li class="games">
                    <button type="button">games</button>
                    <ul>
                        <li>
                            <nuxt-link to="/games/eos-blasterz/">EOS Blasterz</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="partnership">
                    <nuxt-link to="/partnership">partnership</nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="locale change">
            <button type="button">lang</button>
            <ul>
                <li>
                    <a href="#">kor</a>
                </li>
                <li>
                    <a href="#">eng</a>
                </li>
                <li>
                    <a href="#">chn</a>
                </li>
            </ul>
        </div>
    </div>
</header>
</template>

<style lang="scss" scoped src="~/assets/styles/header.scss"></style>

<script>
export default {
    name : 'Header',
    data : () => ({
        page : ''
    }),
    watch : {
        '$route' (to, from) {
            return this.page = this.$route.name
        }
    },
    mounted () {
        this.page = this.$route.name
    }
}
</script>
