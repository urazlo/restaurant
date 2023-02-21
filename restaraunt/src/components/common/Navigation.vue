<template>
  <nav class="nav">
    <div class="nav__list">
      <NavLink
        v-for="item in navigationList"
        :title=item.title
        :link='item.link'
      />

      <CartIcon />
    </div>
  </nav>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

import { NavigationItem } from '@/abstracts/navigation';

import NavLink from '@/components/common/NavLink.vue';
import CartIcon from '@/assets/icons/cart.svg';

@Component({
  components: {
    NavLink,
    CartIcon,
  },
})
export default class Navigation extends Vue {
  public navigationList: NavigationItem[] = [
    {
      title: 'Главная',
      link: '/home'
    },

    {
      title: 'Меню',
      link: '/menu'
    },

    {
      title: 'О нас',
      link: '/about'
    },

    {
      title: 'Бронь',
      link: '/booking'
    },
  ];
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.nav {
  @include flex(space-around, center);

  &__list {
    @include flex();

    position: relative;

    padding-right: 20px;

    &::after {
      @include size(1px, 51px);

      content: '';

      position: absolute;
      right: 0;
      bottom: -15px;

      background-color: var(--white);
    }
  }
}
</style>
