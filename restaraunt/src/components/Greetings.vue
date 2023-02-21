<template>
  <div class="greetings">
    <div class="greetings__title">
      Добро пожаловать в
    </div>

    <div class="greetings__subtitle">
      Наш ресторан
    </div>

    <div class="greetings__slogan">
      дом лучшей еды
    </div>

    <CustomButton class="greetings__btn">
      View menu
    </CustomButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CustomButton from '@/components/common/CustomButton.vue';

@Component({
  components: {
    CustomButton
  }
})
export default class Greetings extends Vue {
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';
$arrowPosition: -70px;

.greetings {
  @include flex-center();
  flex-direction: column;

  padding-top: 200px;

  @include screen-from(medium-large-desktop) {
    padding-top: 322px;
    padding-right: 50%;
  }

  &__title {
    @include text(50px, var(--dark-orange), 400, 1.15);

    @include screen-till(tablet) {
      font-size: 30px;
    }
  }

  &__subtitle {
    @include text(80px, var(--dark-orange), 400, 1.15);

    @include screen-till(tablet) {
      font-size: 40px;
    }
  }

  &__slogan {
    position: relative;

    @include text(18px, var(--grey-light), 400, 1.35);

    text-transform: uppercase;

    @include screen-till(tablet) {
      font-size: 15px;
    }

    &::before,
    &::after {
      content: '';

      position: absolute;
      top: 12px;

      width: 62px;

      border-bottom: 2px solid var(--grey-light);
    }

    &::before {
      right: $arrowPosition;
    }

    &::after {
      left: $arrowPosition;
    }
  }

  &__btn {
    margin-top: 20px;
  }
}
</style>
