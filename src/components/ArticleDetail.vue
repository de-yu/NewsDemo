<template>
  <div>
    <v-card
    class="mx-auto my-12"
    >
    <v-img
      height="250"
      :src="img"
    ></v-img>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>
     author: {{ author }}
    </v-card-text>
    <v-card-text>
     publishedAt:  {{ publishedAt }}
    </v-card-text>
    <v-card-text>
     source from: {{ source }}
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      {{ content }}
    </v-card-text>
  </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ArticleDetail extends Vue {
  @Prop({ default: '' }) img!: string;

  @Prop({ default: '' }) title!: string;

  @Prop({ default: '' }) author!: string;

  @Prop({ default: '' }) publishedAt!: string;

  @Prop({ default: '' }) content!: string;

  @Prop({ default: '' }) source!: string;
}
</script>
