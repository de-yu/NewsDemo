<template>
  <div class="main mx-auto">
    <v-row>
      <v-col cols="12">
        <v-btn class="white--text" color="green" @click="back"> 上一頁 </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <ArticleDetail
        :img="getNewsDetailData.urlToImage"
        :title="getNewsDetailData.title"
        :author="getNewsDetailData.author"
        :publishedAt="getNewsDetailData.publishedAt"
        :content="getNewsDetailData.content"
        :source="getNewsDetailData.source.name">
        </ArticleDetail>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { Article } from '@/interface/Main';
import ArticleDetail from '@/components/ArticleDetail.vue';

@Component@Component({
  components: {
    ArticleDetail,
  },
})
export default class NewsDetail extends Vue {
  @Getter('getNewsDetailData') getNewsDetailData!: Article;

  private back() {
    this.$router.go(-1);
  }
}
</script>
