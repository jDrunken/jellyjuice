<template>
<section class="play eos-blasterz">
    <div class="container">
        <p v-if="$device.isDesktop" id="notice" v-html="$t('notice')"></p>

        <div v-if="$device.isDesktop" id="gameContainer" style="width: 960px; height: 540px;"></div>  
        <div id="scroll-point"></div>  
        <div class="btn_area">
            <!-- <a href="#" class="play ios">iOS Play</a> -->
            <a href="https://play.google.com/store/apps/details?id=com.JellyJuice.Blasterz" class="play aos">Google Play</a>
            <a href="http://syncmedia.macc.skcdn.com/_assembly/Blasterz-release_v12.apk" class="download apk">Android APK</a>
        </div>
    </div>
</section>
</template>

<i18n src="../../../locales/play.json" />

<style lang="scss" scoped src="../../../assets/styles/games.eos-blasterz.play.scss"/>
<style scoped>
p >>> a {
    font-weight: bold;
    color: #ff9000;
}
</style>

<script>
export default {
    name : 'EosBlasterzPlay',
    head: {
        script: [
            { src: '/eos-blasterz/Build/UnityLoader.js' },
            { src: 'https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-core.min.js' },
            { src: 'https://cdn.scattercdn.com/file/scatter-cdn/js/latest/scatterjs-plugin-eosjs.min.js' },
            { src: '/eos-blasterz/Plugin/ScatterPlugin.js' },
            { 
                src: 'https://cdn.jsdelivr.net/npm/eosjs@16.0.8/lib/eos.min.js',
                integrity: 'sha512-zhPSKFEBlDVvUzjl9aBS66cI8tDYoLetynuKvIekHT8NZZ12oxwcZ//M/eT/2Rb/pR/cjFvLD8104Cy//sdEnA==',
                crossorigin: 'anonymous'
            }
        ]    
    },

    mounted() {
        if (this.$device.isDesktop) {
            // 스캐터가 gameInstance 변수를 전역적으로 사용함...
            window.gameInstance = UnityLoader.instantiate("gameContainer", "/eos-blasterz/Build/EOS_BLASTERZ.json")
            // override inline style
            if (window.gameInstance && window.gameInstance.container)
                window.gameInstance.container.style.margin = 'auto'

            // 처음 화면에 꼭 게임 화면이 전부 보일 수 있게 스크롤
            // 홍욱님의 요청...
            this.$scrollTo('#scroll-point', 600, {
                offset: -window.innerHeight + 40,
            })
        }    
    },

    beforeDestroy() {
        window.gameInstance = null
    }
}
</script>
