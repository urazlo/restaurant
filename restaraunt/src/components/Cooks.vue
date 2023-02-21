<template>
  <div class="cooks">
    <SectionTitle
      class="_margin-medium"
      phrase="Наши Повара"
    />

    <div class="cooks__gallery">
      <img
        v-for="image in cooksImages"
        class="cooks__img"
        :src="getCookImage(image.url)"
        alt="dish image"
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Image } from '@/abstracts';
import { getImgUrl } from '@/models/utils';

import SectionTitle from '@/components/common/SectionTitle.vue';

@Component({
  components: {
    SectionTitle
  }
})
export default class Cooks extends Vue {
  public readonly cooksImages: Image[] = [
    {
      title: 'Повар 1',
      url: 'imgs/cook-1.jpg'
    },
    {
      title: 'Повар 2',
      url: 'imgs/cook-3.jpg'
    },
    {
      title: 'Повар 3',
      url: 'imgs/cook-2.jpg'
    },
  ];


  getCookImage(imgPath: string): string {
    return getImgUrl(imgPath);
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.cooks {
  &__gallery {
    @include flex($gap: 30px);

    @include screen-till(medium-large-desktop) {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
