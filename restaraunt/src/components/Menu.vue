<template>
  <div class="menu">
    <SectionTitle
      class="menu__title  _margin-big"
      phrase="Наше меню"
      :use-accent-color="false"
    />

    <div
      v-if="dishes.length"
      class="menu__list"
    >
      <MenuDishCard
        v-for="dish in dishes"
        :dish="dish"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';

import { Dish } from '@/abstracts';

import MenuDishCard from '@/components/MenuDishCard.vue';
import SectionTitle from '@/components/common/SectionTitle.vue';

import { DishModel } from '@/models/dish';

@Component({
  components: {
    MenuDishCard,
    SectionTitle
  }
})
export default class Menu extends DishModel {
  public readonly dishes: Dish[] = [
    {
      name: 'Гамбургер макси',
      description: 'Максимально толстый слой мяса',
      price: 420,
      isRecommended: true,
      img: 'imgs/dish-image.jpg'
    },
    {
      name: 'Гамбургер макси',
      description: 'Максимально толстый слой мяса',
      price: 420,
      isRecommended: false,
      img: 'imgs/dish-image.jpg'
    },
    {
      name: 'Гамбургер макси',
      description: 'Максимально толстый слой мяса',
      price: 420,
      isRecommended: false,
      img: 'imgs/dish-image.jpg'
    },
  ];
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.menu {
  width: 100%;
  min-height: 1000px;

  background-image: url('../assets/imgs/bar-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;


  &__list {
    @include flex(center, $gap: 37px);
    flex-wrap: wrap;

    @include screen-till(tablet) {
      flex-direction: column;
      align-items: center;
    }

    @include screen-till(medium-large-desktop) {
      gap: 20px;
    }
  }

  &__title {
    text-shadow: $section-title-shadow;

    @include screen-from(medium-large-desktop) {
      padding-top: 50px;
    }

      .section-title {
      &__phrase {
        --text-color: var(--white);
      }
    }
  }
}
</style>
