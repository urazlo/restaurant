<template>
  <CustomButton class="order-button">
    Заказ столика
  </CustomButton>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CustomButton from './common/CustomButton.vue';

@Component({
  components: {
    CustomButton
  }
})
export default class OrderButton extends Vue {
}
</script>
