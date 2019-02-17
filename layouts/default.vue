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
<style lang="scss" src="~/assets/styles/carriage-return.scss"></style>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
export default {
    components : {
        Header,
        Footer
    },
    mounted () {
        window.addEventListener('scroll', () => {
            let scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0)
            this.$store.commit('reflectionScrollPosition',scrollTop)
        })
    }
}
</script>
