<template>
  <div class="section-title">
    <span class="section-title__phrase">
      {{ preparedPhrase.phrase }}
    </span>

    <span
      class="section-title__phrase"
      :class="{
        _accent: useAccentColor
      }"
    >

      {{ preparedPhrase.accentWord }}
    </span>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

import { SectionTitle as SectionTitleInterface } from '@/abstracts';

@Component
export default class SectionTitle extends Vue {
  @Prop({ default: ''}) phrase: string;
  @Prop({ default: true }) useAccentColor: boolean;


  get preparedPhrase(): SectionTitleInterface {
    const [accentWord, ...restWords] = this.phrase.split(' ').reverse();
    const preparedPhrase = restWords.reverse().join(' ');

    return {
      accentWord,
      phrase: preparedPhrase
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

@mixin section-title-text($textColor: var(--text-color)) {
  @include text(54px, $textColor, 400, 1.15);
}

.section-title {
  margin: 0 auto;
  text-align: center;

  &._margin-small {
    margin-bottom: 60px;
  }

  &._margin-medium {
    margin-bottom: 100px;
  }

  &._margin-big {
    margin-bottom: 140px;
  }

  @include screen-till(medium-large-desktop) {
    &._margin-small,
    &._margin-medium,
    &._margin-big {
      margin-bottom: 30px;
    }
  }

  &__phrase {
    --text-color: var(--black);

    @include section-title-text();

    &._accent {
      --accent-text-color: var(--dark-orange);
      --text-color: var(--accent-text-color);
    }

    @include screen-till(large-mobile) {
      @include section-title-text(40px);
    }
  }
}
</style>
