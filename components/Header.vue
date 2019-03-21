<template>
<header :class="[page,{reflection : isReflection}]">
    <div class="container">
        <h1>
            <nuxt-link :to="localePath('index')">Jelly Juice</nuxt-link>
        </h1>
        <button type="button"
                class="mobile menu display"
                role="button"
                aria-hidden="hidden"
                v-on:click="toggleMenu('#gnb',$event)"
                :class="{expand : isExpandMenu}">
            메뉴 열기/닫기
        </button>
        <div id="gnb" class="wrapper" :class="{expand : isExpandMenu}">
            <nav>
                <ul>
                    <li class="games" @mouseenter="toggleGamgesMenu('show')" @mouseleave="toggleGamgesMenu('hide')">
                        <nuxt-link :to="localePath('index')" :class="page === 'index' ? 'viewing' : null">{{$t('games')}}</nuxt-link>
                        <transition name="dropdown">
                            <!-- <ul v-if="isExpandGames"> -->
                            <ul v-if="isExpandGames || isMobile">
                                <li>
                                    <nuxt-link :to="localePath('games-eos-blasterz')">
                                        EOS Blasterz
                                    </nuxt-link>
                                </li>
                            </ul>
                        </transition>
                    </li>
                    <li class="partnership" :class="page === 'membership' ? 'viewing' : null">
                        <nuxt-link :to="localePath('membership')">
                            {{$t('membership')}}
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
            <div class="locale change" :class="{expand : isExpandLocale}" @mouseleave="hideLocale()">
                <div>
                    <button type="button" class="locale status" :class="$i18n.locale" v-if="$i18n.locale === 'ko'" @click="toggleLocale()">Korean</button>
                    <button type="button" class="locale status" :class="$i18n.locale" v-if="$i18n.locale === 'en'" @click="toggleLocale()">English</button>
                    <button type="button" class="locale status" :class="$i18n.locale" v-if="$i18n.locale === 'zh'" @click="toggleLocale()">Chinese</button>

                    <transition name="locale">
                        <ul v-if="isExpandLocale || isMobile">
                            <li class="ko"><nuxt-link :to="switchLocalePath('ko')">Korean</nuxt-link></li>
                            <li class="en"><nuxt-link :to="switchLocalePath('en')">English</nuxt-link></li>
                            <li class="zh"><nuxt-link :to="switchLocalePath('zh')">Chinese</nuxt-link></li>
                        </ul>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<style lang="scss" scoped src="../assets/styles/header.scss"></style>

<style>
// menu animation
.locale-enter {
    opacity:0
}

.locale-leave-active {
    transition: opacity 0.2s;
}

.locale-leave-to {
    opacity: 0;
}


.dropdown-enter {
    opacity:0
}

.dropdown-enter-active {
    transition: opacity 0.2s 0.1s;
}

.dropdown-leave-active {
    opacity:0;
}

.dropdown-leave-to {
    opacity: 0;
}
</style>
<i18n src="../locales/header.json"/>

<script>
export default {
    name : 'Header',
    data : () => ({
        page : '/',
        isReflection : false,
        isExpandMenu : false,
        isExpandGames : false,
        isExpandLocale : false,
        isMobile : new Boolean
    }),
    watch : {
        '$route' () {
            this.isExpandMenu = false
            this.page = this.$route.name.replace(/_/g,'').replace(/(ko|en|zh)/g,'')
        }
    },
    methods : {
        viewReflection () {
            // return this.isReflection = this.$store.state.scrollPosition <= 0 ? false : true
            let scroll = (window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0))
            this.isExpandLocale = false;
            return this.isReflection = scroll <= 0 ? false : true
        },

        toggleMenu (event) {
            this.isExpandMenu =  this.isExpandMenu === true ? false : true
        },

        toggleLocale () {
            this.isExpandLocale = !!this.isExpandLocale ? false : true
        },

        hideLocale () {
            this.isExpandLocale = false;
        },

        toggleGamgesMenu (status) {
            if (status === 'show') {
                this.isExpandGames = true
            } else if (status === 'hide') {
                this.isExpandGames = false
            } else {
                this.isExpandGames = !!this.isExpandGames ? false : true
            }
        }
    },
    created () {
        // 현재 페이지 이름을 받아와서 스타일링 하는데 쓴다.
        this.page = this.$route.name.replace(/_/g,'').replace(/(ko|en|zh)/g,'')
        this.viewReflection()
        window.addEventListener('scroll',this.viewReflection)
        window.addEventListener('DOMContentLoaded', this.viewReflection)

        // 현 디바이스가 모바일인지 데스크탑인지 확인한다.
        this.isMobile = this.$device.isMobile
    },
    destroyed () {
        window.removeEventListener('scroll',this.viewReflection)
    },
}
</script>
