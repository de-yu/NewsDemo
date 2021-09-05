<template>
  <div class="main mx-auto">
    <v-row>
      <v-col md="4" sm="6" cols="12">
        <div>關鍵字</div>
        <v-text-field
          label="關鍵字"
          v-model="searchParameters.q"
          solo
        ></v-text-field>
      </v-col>
      <v-col md="4" sm="6" cols="12">
        <div class="d-flex">
          <div>
            <div>開始日期</div>
            <input class="date elevation-1 pa-3 mr-4" type="date" v-model="searchParameters.from">
          </div>
          <div>
            <div>結束日期</div>
            <input class="date elevation-1 pa-3" type="date" v-model="searchParameters.to">
          </div>
        </div>
      </v-col>
      <v-col md="3" sm="6" cols="12">
        <v-btn class="white--text mt-6" color="green" @click="search">搜尋</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn class="mr-4 white--text mb-4" color="blue" v-for="(type , index) in sortByType"
        :disabled="typeCanUse(type)" :key="index" @click="changeSortBy(type)">
          {{ type }}
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="3" sm="6" cols="12"
      v-for="(article , index) in getNewsData"
      :key="`${index}article`">
        <ArticleDescription
        :img="article.urlToImage"
        :title="article.title"
        :author="article.author"
        :publishedAt="article.publishedAt"
        :description="article.description"
        :index="index"
        @toDetailPage="toDetailPage">
        </ArticleDescription>
      </v-col>
    </v-row>
    <div class="text-center mb-10">
      <v-pagination
        v-model="searchParameters.page"
        :length="getAllPages"
        :total-visible="7"
        @input="toPage"
        circle
      ></v-pagination>
    </div>
  </div>
</template>

<style scoped>

.main {
  width: 100%;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import _ from 'lodash';
import { Search, Article } from '@/interface/Main';
import ArticleDescription from '@/components/ArticleDescription.vue';

@Component({
  components: {
    ArticleDescription,
  },
})
export default class NewsList extends Vue {
  @Action('getData') getData!: (data: Search) => void;

  @Action('setNth') setNth!: (nth: number) => void;

  @Getter('getNewsData') getNewsData!: Article[];

  @Getter('getAllPages') getAllPages!: number;

  @Getter('getSearchParameters') getSearchParameters!: Search;

  private sortByType = ['relevancy', 'popularity', 'publishedAt'];

  private searchParameters = {
    q: 'COVID-19',
    from: '',
    to: '',
    sortBy: 'publishedAt',
    page: 1,
  };

  private created() {
    this.searchParameters = _.assign(this.searchParameters, this.getSearchParameters);
    this.search();
  }

  private search() {
    this.getData(this.searchParameters);
    document.documentElement.scrollTop = 0;
  }

  private changeSortBy(type: string): void {
    this.searchParameters.page = 1;
    this.searchParameters.sortBy = type;
    this.search();
  }

  private typeCanUse(type: string): boolean {
    return type === this.searchParameters.sortBy;
  }

  private toDetailPage(nth: number): void {
    this.setNth(nth);
    this.$router.push('./NewsDetail');
  }

  private toPage() {
    this.search();
  }
}
</script>
