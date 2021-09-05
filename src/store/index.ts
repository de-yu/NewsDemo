import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import ApiClient from '@/api/ApiClient';
import { Search, Article } from '@/interface/Main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsData: [],
    resultSum: 0,
    detailNth: 0,
    searchParameters: {
      q: 'COVID-19',
      from: '',
      to: '',
      sortBy: 'publishedAt',
      page: 1,
    },
  },
  mutations: {
    setNewsData(state: any, data: Article[]) {
      state.newsData = data;
    },
    setResultSum(state: any, resultSum: number) {
      state.resultSum = resultSum;
    },
    setDetailNth(state: any, nth: number) {
      state.detailNth = nth;
    },
    saveSearchParameters(state: any, search: Search) {
      state.searchParameters = search;
    },
  },
  actions: {

    getData({ commit }: any, data: Search) {
      const search: string[] = [];

      _.forEach(data, (value: string | number, key: string) => {
        if (value !== '') {
          search.push(`${key}=${value}`);
        }
      });

      const searchWord = `?${search.join('&')}`;

      return new Promise(() => {
        ApiClient.getData(searchWord).then((response) => {
          commit('setNewsData', response.data.articles);
          commit('setResultSum', response.data.totalResults);
          commit('saveSearchParameters', data);
        });
      });
    },

    setNth({ commit }: any, nth: number) {
      commit('setDetailNth', nth);
    },
  },
  getters: {
    getNewsData(state: any): Article[] {
      return state.newsData;
    },
    getAllPages(state: any): number {
      let result = Math.floor(state.resultSum / 20);

      if (state.resultSum % 20 > 0) {
        result += 1;
      }
      return result;
    },
    getNewsDetailData(state: any): Article {
      return state.newsData[state.detailNth];
    },
    getSearchParameters(state: any): Search {
      return state.searchParameters;
    },

  },
  modules: {
  },
});
