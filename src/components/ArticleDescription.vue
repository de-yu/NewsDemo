<template>
  <div>
    <v-card
    class="mx-auto my-6"
    >
    <v-img
      height="250"
      :src="img"
    ></v-img>
    <v-card-title class="blue--text link" @click="toDetail">
      {{ title }}
    </v-card-title>
    <v-card-text>
     author: {{ author }}
    </v-card-text>
    <v-card-text>
     publishedAt:  {{ publishedAt }}
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      {{ description }}
    </v-card-text>
  </v-card>
  </div>
</template>
<style scoped>

.link
{
  cursor: pointer;
  text-decoration: underline;
}

</style>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ArticleDescription extends Vue {
  @Prop({ default: '' }) img!: string;

  @Prop({ default: '' }) title!: string;

  @Prop({ default: '' }) author!: string;

  @Prop({ default: '' }) publishedAt!: string;

  @Prop({ default: '' }) description!: string;

  @Prop({ default: '' }) index!: number;

  private toDetail() {
    this.$emit('toDetailPage', this.index);
  }
}
</script>
