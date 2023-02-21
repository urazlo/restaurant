import { Prop, Vue } from 'vue-property-decorator';

import { Dish } from '@/abstracts';
import { getImgUrl } from '@/models/utils';

export class DishModel extends Vue {
  @Prop() dish: Dish;


  get dishImg(): string {
    return getImgUrl(this.dish.img);
  }

  get isRecommended(): boolean {
    return Boolean(this.dish.isRecommended);
  }
}
