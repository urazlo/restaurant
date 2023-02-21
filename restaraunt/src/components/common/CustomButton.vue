<template>
  <div class="custom-button">
    <template>
      <div class="custom-button__text">
        <slot />
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CustomButton extends Vue {
}
</script>

<style lang="scss">
@import 'src/assets/scss/app.scss';

.custom-button {
  @include size(fit-content, 47px);
  @include pointer();

  padding: 1.4rem 1.8rem;

  background-color: var(--orange);

  &__text {
    --text-color: var(--white);

    @include text(var(--font-size, 14px), var(--text-color), 700, 1.3);

    text-transform: uppercase;
    text-align: center;
  }
}
</style>
