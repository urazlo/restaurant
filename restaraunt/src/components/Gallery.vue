<template>
  <div class="gallery">
    <SectionTitle
      class=" _margin-small"
      phrase="Галлерея блюд"
    />

    <div class="gallery__list">
      <img
        v-for="image in galleryImages"
        class="gallery__img"
        :src="getGalleryImage(image)"
        alt="gallery image"
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
export default class Gallery extends Vue {
  public galleryImages: Image[] = [
    {
      title: 'table',
      url: 'imgs/table.jpg'
    },
    {
      title: 'coffee',
      url: 'imgs/coffee.jpg'
    },
    {
      title: 'goulash',
      url: 'imgs/goulash.jpg'
    },
    {
      title: 'coffee',
      url: 'imgs/coffee.jpg'
    },
    {
      title: 'goulash',
      url: 'imgs/goulash.jpg'
    },
    {
      title: 'table',
      url: 'imgs/table.jpg'
    },
  ];


  getGalleryImage(image: Image): string {
    return getImgUrl(image.url);
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.gallery {
  position: relative;

  &::after, &::before {
    @include size(30px, 100px);

    content: '';
    position: absolute;
    top: 222px;

    background-color: var(--red);

    @include screen-till(medium-large-desktop) {
      display: none;
    }
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }

  &__list {
    display: grid;
    gap: 30px;

    @include screen-till(medium-large-desktop) {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    @include screen-from(medium-large-desktop) {
      grid-template-columns: repeat(4, 1fr);
      max-width: 1000px;
    }
  }

  &__img {
    &:last-child,
    &:first-child {
      @include screen-from(medium-large-desktop) {
        grid-column: span 2;
      }
    }
  }

  &__img {
    max-width: 100%;
    min-width: 250px;

    @include screen-till(medium-large-desktop) {
      max-width: 300px;
    }
  }
}
</style>
