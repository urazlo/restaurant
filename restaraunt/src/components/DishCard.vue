<template>
  <div class="dish-card">
    <img
      class="dish-card__img"
      :src="dishImg"
      alt="dish image"
    >

    <div class="dish-card__info">
      <span class="dish-card__name">
        {{ dish.name }}
      </span>

      <span class="dish-card__dots _hide-on-mobile" />

      <span class="dish-card__price">
        {{ dish.price }} ₽
      </span>
    </div>
  </div>
</template>


<script lang="ts">
import { Component } from 'vue-property-decorator';

import { Dish } from '@/abstracts';

import SectionTitle from '@/components/common/SectionTitle.vue';

import { DishModel } from '@/models/dish';

@Component({
  components: {
    SectionTitle
  }
})
export default class DishCard extends DishModel {
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.dish-card {
  @include flex($align: center, $gap: 30px);

  width: 100%;

  @include screen-till(tablet) {
    gap: 15px;
  }

  &__info {
    @include flex($align: center, $gap: 8px);
    @include dish-card-text();

    width: 100%;

    @include screen-till(tablet) {
      @include dish-card-text(22px);
    }
  }

  &__dots {
    flex-grow: 1;

    height: 100%;
    width: 100%;

    margin: 0 2px;
    border-bottom: 1px dashed var(--black);
  }

  &__price {
    min-width: fit-content;
  }
}
</style>
