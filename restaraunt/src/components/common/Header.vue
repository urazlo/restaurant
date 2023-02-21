<template>
  <header class="header section">
    <div class="header__content _hide-on-mobile">
      <Logo />

      <Navigation />

      <Contacts />

      <Divider />

      <OrderButton />
    </div>

    <div class="header__content _show-on-mobile">
      <MobileLogo class="header__logo-mobile" />

      <BurgerMenu class="header__menu" />
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Logo from '@/assets/icons/logo.svg';
import Navigation from '@/components/common/Navigation.vue';
import Contacts from '@/components/Contacts.vue';
import Divider from '@/components/Divider.vue';
import OrderButton from '@/components/OrderButton.vue';
import BurgerMenu from '@/assets/icons/burger-menu.svg';
import MobileLogo from '@/assets/icons/logo-mobile.svg';

@Component({
  components: {
    Logo,
    Navigation,
    Contacts,
    OrderButton,
    Divider,
    BurgerMenu,
    MobileLogo
  },
})
export default class Header extends Vue {
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.header {
  z-index: 999;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  padding: 20px 0;
  width: 100%;

  color: var(--white);
  background: var(--black-blur);

  &__content {
    @include flex(space-between, center);
  }

  &__menu,
  &__logo-mobile {
    @include pointer();
  }
}
</style>
