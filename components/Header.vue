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
                    <li class="partnership" :class="page === 'partnership' ? 'viewing' : null">
                        <nuxt-link :to="localePath('partnership')">
                            {{$t('partnership')}}
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
    computed: {
        availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
        }
    },
    methods : {
        viewReflection () {
            // return this.isReflection = this.$store.state.scrollPosition <= 0 ? false : true
            let scroll = (window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0))
            this.isExpandLocale = false;
            return this.isReflection = scroll <= 0 ? false : true
        },
        toggleMenu (id,event) {
            console.log(this.isExpandMenu)
            if (this.isExpandMenu === true) {
                this.isExpandMenu = false
                if (process.browser) {
                    // document.querySelector('html').removeAttribute('style')
                    // document.querySelector('body').removeAttribute('style')
                    this.disableBodyScroll(false,id,event)
                }
            } else {
                this.isExpandMenu = true
                if (process.browser) {
                    // document.querySelector('html').style.overflow = 'hidden'
                    // document.querySelector('body').style.overflow = 'hidden'
                    this.disableBodyScroll(true,id,event)
                }

            }
        },
        preventBodyScroll (event,_selector,_element) {
            if (false === _element || !event.target.closest(_selector)) {
                event.preventDefault();
            }
        },

        disableBodyScroll : function (allow, selector,event) { // 🔗 Thijs Huijssoon https://gist.github.com/thuijssoon

            /**
             * Private variables
             */
            let _selector = false,
                _element = false,
                _clientY;

            let captureClientY = function (event) {
                // only respond to a single touch
                if (event.targetTouches.length === 1) {
                    _clientY = event.targetTouches[0].clientY;
                }
            };

            let preventOverscroll = function (event) {

                // only respond to a single touch
                if (event.targetTouches.length !== 1) {
                    return;
                }

                var clientY = event.targetTouches[0].clientY - _clientY;

                if (_element.scrollTop === 0 && clientY > 0) {
                    event.preventDefault();
                }

                if ((_element.scrollHeight - _element.scrollTop <= _element.clientHeight) && clientY < 0) {
                    event.preventDefault();
                }

            };

            if (typeof selector !== "undefined") {
                _selector = selector;
                _element = document.querySelector(selector);
            }

            if (true === allow) {
                if (false !== _element) {
                    _element.addEventListener('touchstart', captureClientY, { passive: false });
                    _element.addEventListener('touchmove', preventOverscroll, { passive: false });
                }
                document.body.addEventListener("touchmove", this.preventBodyScroll(event,_selector,_element), { passive: false });
            } else {
                if (false !== _element) {
                    _element.removeEventListener('touchstart', captureClientY, { passive: false });
                    _element.removeEventListener('touchmove', preventOverscroll, { passive: false });
                }
                document.body.removeEventListener("touchmove", this.preventBodyScroll(event,_selector,_element), { passive: false });
            }
            // };
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
    mounted () {
        // 현재 페이지 이름을 받아와서 스타일링 하는데 쓴다.
        this.page = this.$route.name.replace(/_/g,'').replace(/(ko|en|zh)/g,'')
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
