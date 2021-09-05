<template>
  <v-app>
    <v-main class="main pa-4 pt-10">
      <router-view/>
    </v-main>
  </v-app>
</template>

<style scpoed>

.main {
  width:100%;
  max-width: 1200px;
}

</style>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>
