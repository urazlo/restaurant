<template>
  <div class="history">
    <div class="history__info">
      <div class="history__info-text">
        <div class="history__title">
          Наша

          <span class="history__title _accent">
            История
          </span>
        </div>

        <div class="history__subtitle">
          Как и у любого другого самобытного места, у нас есть своя, особая история. Идея ресторана пришла основателям неожиданно. Во время прогулки по лесу создатель нашего ресторана застрял в сотнях километров от ближайшего населенного пункта. Вдали от цивилизации и связи им пришлось навремя обустровать себе нехитрый быт, добывать и готовить себе еду.
        </div>
      </div>

      <div class="history__products">
        <div
          class="history__product"
          v-for="product in historyProducts"
          :key="product.qty + product.name"
        >
          <div class="history__product-qty">
            {{ product.qty }}
          </div>

          <div class="history__product-name">
            {{ product.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="history__img-wr">
      <img
        class="history-info__img"
        src="@/assets/imgs/gallery.jpg"
        alt="gallery"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class History extends Vue {
  public historyProducts: Record<string, string | number>[] = [
    {
      qty: 93,
      name: 'Напитки'
    },

    {
      qty: 206,
      name: 'Еда'
    },

    {
      qty: 71,
      name: 'Закуски'
    }
  ]
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.history {
  @include flex($gap: 120px);

  @include screen-till(medium-large-desktop) {
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }

  &__info {
    @include flex($align: center, $direction: column);

    @include size(444px);
  }

  &__info-text {
    @include flex($align: center, $direction: column);

    gap: 25px;
  }

  &__title {
    @include text(54px, var(--black), 400, 1.3);

    &._accent {
      color: var(--dark-orange);
    }
  }

  &__subtitle {
    @include text(16px, var(--dark-grey), 400, 1.3);
    text-align: center;
  }

  &__products {
    @include flex($align: center, $direction: center);
    gap: 60px;

    margin-top: 30px;
  }

  &__product {
    @include flex($align: center, $direction: column);
  }

  &__product-qty {
    @include text(40px, var(--brown), 400, 1.3);
  }

  &__product-name {
    @include text(20px, var(--black), 400, 1.3);
  }

  &__img-wr {
    padding: 0 15px;
  }
}
</style>
