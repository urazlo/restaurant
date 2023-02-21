<template>
  <router-link
    class="logo"
    to="/"
  >
    <img
      class="logo__img"
      src="@/assets/img/logo.jpg"
      alt="logo"
    >
  </router-link>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {
}
</script>

<style lang="scss">
//@import 'src/assets/scss/app.scss';

.logo {
  padding: .5rem 2rem;

  &__img {
    width: 70%;
  }
}
</style>
