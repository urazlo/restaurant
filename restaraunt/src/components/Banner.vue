<template>
  <div class="banner">
    <Greetings class="banner__greetings" />

    <Introduction class="banner__introduction" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Greetings from '@/components/Greetings.vue';
import Introduction from '@/components/Introduction.vue';

@Component({
  components: {
    Greetings,
    Introduction
  }
})
export default class Banner extends Vue {
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.banner {
  background-image: url('../assets/imgs/main-banner.png');
  background-repeat: no-repeat;
  background-size: contain;

  width: 100%;

  @include screen-till(tablet) {
    background-size: auto;
  }
}
</style>
