<template>
  <div class="contacts">
    <div class="contacts__phone">
      <PhoneIcon class="contacts__phone-icon" />

      <div class="contacts__phone-number">
        {{ phoneNumber }}
      </div>
    </div>

    <div class="contacts__text">
      Свяжитесь с нами для бронирования
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import PhoneIcon from '@/assets/icons/phone.svg';

@Component({
  components: {
    PhoneIcon
  },
})
export default class Contacts extends Vue {
  public phoneNumber = '+999-888-76-54';
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.contacts {
  &__phone {
    @include flex($gap: 8px);
  }

  &__phone-icon {

  }

  &__phone-number {
    font-size: 1.8rem;
    font-weight: 700;
  }

  &__text {

  }
}
</style>
