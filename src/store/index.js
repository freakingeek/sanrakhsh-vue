import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pageInfo: [],
    language: 'fa'
  },

  getters: {
    pageInfoBaseOnSiteLanguage(state) {
      return state.pageInfo.filter(pageInfo => pageInfo.lang === state.language);
    }
  },

  mutations: {
    CHANGE_PAGE_TITLE(state, pageInfo) {
      state.pageInfo = pageInfo;
    },

    CHANGE_DEFAULT_LANGUAGE(state, newLanguage) {
      state.language = newLanguage;
    }
  }
});

export default store;
