<template>
    <div class="reviews-slider">
      <div class="reviews-slider__text">
        {{ text }}
      </div>

      <img
        class="reviews-slider__customer-img"
        :src="customerImage"
        alt="customer image"
      >

      <div class="reviews-slider__customer-role">
        Посетитель
      </div>

      <div class="reviews-slider__customer-name">
        {{ customerName }}
      </div>

      <div class="reviews-slider__dots">
        <div
          v-for="dot in reviews"
          class="reviews-slider__dot"
          :class="{
            _active: getIsDotActive(dot.id)
          }"
          @click="setActiveSlideId(dot.id)"
        />
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Review } from '@/abstracts';
import { getImgUrl } from '@/models/utils';

@Component({
  components: {

  }
})
export default class ReviewsSlider extends Vue {
  public activeSlideId: number = 1;
  public readonly reviews: Review[] = [
    {
      customerName: 'Николай',
      img: 'imgs/customer.jpg',
      id: 1,
      text: 'Я надолго запомню мой День рождения, проведённый в этом ресторане! Кусочек родной Армении!!! Отдельное спасибо за комплепент в виде фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и родственникам также за рубежом, путешествующих в Санкт-Петербург!!!',
    },
    {
      customerName: 'Юрий',
      img: 'imgs/customer.jpg',
      text: 'Отдельное спасибо за комплепент в виде фруктовой тарелки.',
      id: 2
    },
    {
      customerName: 'Игнат',
      img: 'imgs/customer.jpg',
      text: 'Я надолго запомню мой День рождения, проведённый в этом ресторане!',
      id: 3
    },
  ];


  get activeSliderItem(): Review | null {
    return this.reviews.find((review) => review.id === this.activeSlideId) || null;
  }

  get text(): string {
    return this.activeSliderItem ? this.activeSliderItem.text : '';
  }

  get customerName(): string {
    return this.activeSliderItem ? this.activeSliderItem.customerName : '';
  }

  get customerImage(): string {
    return this.activeSliderItem ? getImgUrl(this.activeSliderItem.img) : '';
  }


  setActiveSlideId(value: number) {
    this.activeSlideId = value;
  }

  getIsDotActive(value: number): boolean {
    return this.activeSlideId === value;
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

@mixin reviews-text($weight: 400) {
  @include text(20px, var(--black), $weight, 1.3);
}

.reviews-slider {
  @include flex($align: center, $direction: column, $gap: 20px);
  @include reviews-text();

  max-height: 500px;

  padding-right: 260px;
  padding-left: 260px;

  background-color: var(--grey-light-800);

  @include screen-till(medium-large-desktop) {
    padding-right: 100px;
    padding-left: 100px;
  }

  &__text {
    @include line-clamp(4);

    min-height: 105px;

    font-style: italic;
    text-align: center;
  }

  &__customer-img {
    @include size(100px, 100px);

    border-radius: 50%;
  }

  &__customer-role {
    font-weight: 600;
  }

  &__dots {
    @include flex($gap: 10px);
  }

  &__dot {
    @include size(10px, 10px);
    @include pointer();

    border-radius: 50%;
    background-color: var(--grey-light);

    &._active {
      background-color: transparent;
      border: 2px solid var(--orange);
    }
  }
}
</style>di
