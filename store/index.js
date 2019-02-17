import Vuex from 'vuex'

const store = () => new Vuex.Store({
    state: {
        scrollPosition: 0,
    },
    mutations: {
        reflectionScrollPosition (state,scrollTop) {
            return state.scrollPosition = scrollTop
        },
    },
    getters : {
        getScrollTop (state) {
            return state.scrollPosition
        }
    }
})

export default store
