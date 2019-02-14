<template>
<div>
    <Header />
    <main>
        <nuxt/>
    </main>
    <Footer />
</div>
</template>

<style lang="scss" src="~/assets/styles/base.scss"></style>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
    components : {
        Header,
        Footer
    }
}
</script>
