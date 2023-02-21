<template>
  <div class="introduction">
    <div
      v-for="card in cards"
      class="introduction__card"
      :key="card.title + card.subtitle"
    >
      <DishImg />

      <div class="introduction__card-title">
        <span class="introduction__card-phrase">
          {{ getTitle(card.title).phrase }}
        </span>

        <span class="introduction__card-phrase _accent">
          {{ getTitle(card.title).accentWord }}
        </span>
      </div>

      <div class="introduction__card-subtitle">
        {{ card.subtitle }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { SectionTitle } from '@/abstracts';

import DishImg from '@/assets/icons/dish.svg';

@Component({
  components: {
    DishImg
  }
})
export default class Introduction extends Vue {
  public cards: Record<string, string>[] = [
    {
      title: 'Магическая Атмосфера',
      subtitle: 'В нашем заведении царит магическая атмосфера наполненная вкусными ароматами'
    },

    {
      title: 'Лучшее качество Еды',
      subtitle: 'Качество нашей Еды - отменное!'
    },

    {
      title: 'Магическая Атмосфера',
      subtitle: 'Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!'
    }
  ];

  getTitle(title: string): SectionTitle {
    const [accentWord, ...restWords] = title.split(' ').reverse();
    const preparedPhrase = restWords.reverse().join(' ');

    return {
      accentWord,
      phrase: preparedPhrase
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

@mixin introText($textColor: var(--dark-grey-1000)) {
  @include text(26px, $textColor, 400, 1.15);

  text-align: center;
}

.introduction {
  @include flex(center, $gap: 30px);

  margin-top: 60px;

  @include screen-till(medium-large-desktop) {
    align-items: center;
    flex-direction: column;
  }

  @include screen-from(medium-large-desktop) {
    margin-top: 120px;
  }

  &__card {
    @include flex($align: center, $direction: column, $gap: 20px);
    @include size(350px);

    min-height: 330px;
    padding: 50px 25px 15px;

    background-color: var(--white);
    box-shadow: $intro-card-shadow;

    //@include screen-till(medium-large-desktop) {
    //  margin-top: 120px;
    //}
  }

  &__card-title {
    @include introText();
  }

  &__card-phrase {
    @include introText();

    &._accent {
      @include introText(var(--brown));
    }
  }

  &__card-subtitle {
    @include introText(var(--dark-grey));
  }
}
</style>
