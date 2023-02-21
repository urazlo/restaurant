<template>
  <div class="dishes">
    <SectionTitle
      class="dishes__title _margin-big"
      phrase="Наши блюда"
    />

    <div class="dishes__content">
      <img
        class="dishes__img"
        src="@/assets/imgs/pizza.jpg"
        alt="pizza image"
      >

      <div class="dishes__menu">
        <DishCard
          v-for="dish in dishes"
          :dish="dish"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Dish } from '@/abstracts';

import SectionTitle from '@/components/common/SectionTitle.vue';
import DishCard from '@/components/DishCard.vue';

@Component({
  components: {
    SectionTitle,
    DishCard
  }
})
export default class Dishes extends Vue {
  public readonly dishes: Dish[] = [
    {
      name: 'Гамбургер мини',
      price: 220,
      img: 'imgs/burger.jpg'
    },
    {
      name: 'Гамбургер мини',
      price: 220,
      img: 'imgs/burger.jpg'
    },
    {
      name: 'Гамбургер мини',
      price: 220,
      img: 'imgs/burger.jpg'
    }
  ];
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.dishes {
  &__img {
    max-width: fit-content;

    @include screen-till(medium-large-desktop) {
      display: none;
    }
  }

  &__content {
    @include flex($gap: 30px);

    @include screen-till(medium-large-desktop) {
      flex-direction: column;
    }
  }

  &__menu {
    @include flex($direction: column, $gap: 30px);
    flex-grow: 1;

    padding: 0 15px;
  }
}

</style>
