<template>
  <div class="business-lunch">
    <div class="business-lunch__background-wr" />

    <div class="business-lunch__content">
      <div class="business-lunch__text">
        <div class="business-lunch__title">
          Отпразднуйте в одном из самых лучших ресторанов.
        </div>

        <div class="business-lunch__subtitle">
          Только в этом месяце бизнес-ланч от 250 ₽
        </div>
      </div>

      <OrderButton class="business-lunch__btn" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import OrderButton from '@/components/OrderButton.vue';

@Component({
  components: {
    OrderButton
  }
})
export default class BusinessLunch extends Vue {
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.business-lunch {
  position: relative;

  background-image: url('../assets/imgs/business-lunch.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  max-width: 100vw;
  margin: 50px auto;
  height: 350px;

  &__background-wr {
    position: absolute;

    width: 100%;
    height: 100%;

    background: var(--black-blur);
  }

  &__content {
    @include flex(space-between, center);

    max-width: 100%;
    padding: 80px 165px;

    @include screen-till(medium-large-desktop) {
      justify-content: center;
      flex-direction: column;
      gap: 20px;

      height: 100%;
      padding: 40px 30px;

      text-align: center;
    }
  }

  &__text {
    @include flex($direction: column, $gap: 20px);

    z-index: 1;

    @include screen-from(medium-large-desktop) {
      max-width: 600px;
    }
  }

  &__title {
    @include text(52px, var(--dark-orange), 400, 1.15);

    @include screen-till(medium-large-desktop) {
      font-size: 36px;
    }
  }

  &__subtitle {
    @include text(24px, var(--white), 700, 1.15);

    @include screen-till(tablet) {
      font-size: 20px;
    }
  }

  &__btn {
    z-index: 1;
  }
}
</style>
