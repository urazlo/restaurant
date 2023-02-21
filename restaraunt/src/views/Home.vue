<template>
  <div class="home">
    <Banner />

    <History class="home__history section" />

    <BusinessLunch class="home__business-lunch _margin-medium" />

    <Dishes class="home__dishes section" />

    <Menu class="home__menu section" />

    <ReviewsSlider class="home__reviews section _padding-medium" />

    <Gallery class="home__gallery section" />

    <Cooks class="home__cooks section" />

    <Reservation class="home__reservation" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Cooks from '@/components/Cooks.vue';
import Gallery from '@/components/Gallery.vue';
import Dishes from '@/components/Dishes.vue';
import BusinessLunch from '@/components/BusinessLunch.vue';
import History from '@/components/History.vue';
import Banner from '@/components/Banner.vue';
import Menu from '@/components/Menu.vue';
import ReviewsSlider from '@/components/Reviews.vue';
import Reservation from '@/components/Reservation.vue';

@Component({
  components: {
    Cooks,
    Gallery,
    ReviewsSlider,
    Dishes,
    BusinessLunch,
    History,
    Banner,
    Menu,
    Reservation
  },
})
export default class Home extends Vue {
}
</script>

<style lang="scss">
//@import 'src/assets/scss/app.scss';

.home {
}
</style>
