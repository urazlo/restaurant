<template>
  <div id="app">
    <Header />

    <main class="main">
        <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

@Component({
  components: {
    Footer,
    Header
  },
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import 'src/assets/scss/app';

#app {
  @include flex-column();

  font-size: 1.6rem;
}

body {
  margin: 0;
  padding: 0;

  overflow-x: hidden;
}

.main {
  @include flex-column();

  justify-content: center;
  flex: 1 1 auto;
  width: 100%;
}
</style>

