<template>
<section class="description">
    <div class="container">
        <h3>It's payback time!<br />
            Blast monsters and win the prize!</h3>
        <div class="container screenshot">
            <no-ssr>
            <carousel class="description" :perPageCustom="[[320, 1],[600, 2]]" :mouse-drag="false" :navigationEnabled="true">
                <slide class="items">
                    <div>
                        <img src="../../../assets/images/img-blasterz-movie@2x.png" alt="">
                    </div>
                </slide>
                <slide class="items">
                    <div>
                        <img src="../../../assets/images/img-blasterz-screenshot-01@2x.png" alt="">
                    </div>
                </slide>
                <slide class="items">
                    <div>
                        <img src="../../../assets/images/img-blasterz-screenshot-02@2x.png" alt="">
                    </div>
                </slide>
                <slide class="items">
                    <div>
                        <img src="../../../assets/images/img-blasterz-screenshot-03@2x.png" alt="">
                    </div>
                </slide>
            </carousel>
            </no-ssr>
        </div>
        <p>Beware, push and jump to kill monsters! EOS Blasterz is a hyper casual game based on the EOS mainnet. Multiple users can compete, and win payback EOS tokens as a reward. Enjoy fun & easy-to-play game interface! One-touch game control will introduce new blockchain game experience. Jump into your favorite competition mode and be the winner. Stay tuned to enjoy upgrade features and skins. Oh, Don’t forget to bring your blaster spirit!</p>
        <div class="btn_area">
            <a href="#" class="play ios">IOS Play</a>
            <a href="#" class="play aos">Google Play</a>
            <a href="#" class="download apk">Android APK</a>
            <a href="#" class="play web">WEB</a>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped src="../../../assets/styles/games.eos-blasterz.description.scss"/>
<style lang="scss"        src="../../../assets/styles/carousel.scss" />
<style lang="scss">
.items {
    margin:0 10px;

    > div {
       max-width:630px;
    }
    img {
        display:block;
        width:100%;
    }
}

</style>

<script>
export default {
    name : 'Description'
}
</script>
