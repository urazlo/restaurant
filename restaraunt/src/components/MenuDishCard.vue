<template>
  <div class="menu-dish-card">
    <div
       v-if="isRecommended"
       class="menu-dish-card__recommendation"
    >
      recommended
    </div>

    <div class="menu-dish-card__img-wr">
      <img
        class="menu-dish-card__img"
        :src="dishImg"
        alt="burger image"
      >

      <span class="menu-dish-card__price">
        {{ dish.price }} ₽
      </span>
    </div>

    <div class="menu-dish-card__info">
      <span class="menu-dish-card__name">
        {{ dish.name }}
      </span>

      <span class="menu-dish-card__description">
        {{ dish.description }}
      </span>

      <CustomButton class="menu-dish-card__btn">
        Заказать
      </CustomButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import CustomButton from './common/CustomButton.vue';

import { DishModel } from '@/models/dish';

@Component({
  components: {
    CustomButton
  }
})
export default class MenuDishCard extends DishModel {
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.menu-dish-card {
  @include flex($direction: column, $gap: 20px);

  position: relative;

  max-width: 350px;

  padding: 80px 60px 30px;

  background-color: var(--white);

  @include screen-till(medium-large-desktop) {
    padding: 15px 30px;
  }

  &__img-wr {
    position: relative;
  }

  &__img {
    border-radius: 50%;
  }

  &__price {
    @include flex-center();
    @include size(100px, 100px);
    @include text(30px, var(--white), 400, 1.1);

    position: absolute;
    right: 0;
    bottom: 0;

    border-radius: 50%;
    border: 7px solid var(--white);

    background-color: var(--dark-orange);
  }

  &__info {
    @include flex($align: center, $direction: column, $gap: 20px);

    font-family: 'Open Sans';
  }

  &__name {
    @include dish-card-text();
  }

  &__description {
    @include dish-card-text(16px);
  }

  &__btn {
    --font-size: 16px;

    padding: 14px 68px;

    background-color: var(--dark-orange);
    box-shadow: $dish-card-shadow;
  }

  &__recommendation {
    @include text(13px, var(--black), 400, 1.3);

    position: absolute;
    left: 0;
    top: 0;

    padding: 8px 11px;
    text-transform: uppercase;

    background-color: var(--dark-orange);
  }
}
</style>
