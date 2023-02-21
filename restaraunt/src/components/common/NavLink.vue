<template>
  <span>
    <router-link
      class="nav-link"
      :to=link
    >
      {{ title }}
    </router-link>
  </span>
</template>


<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NavLink extends Vue {
  @Prop({ default: null }) title: string | null;
  @Prop({ default: null }) link: string | null;
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.nav-link {
  @include flex();

  margin-right: 2.5rem;

  @include text(1.4rem, var(--white), 700, 1.35);

  text-decoration: none;
  text-transform: uppercase;

  &:last-child {
    margin-right: 3.2rem;
  }
}
</style>
