<template>
  <div class="reservation" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Reservation extends Vue {
}
</script>

<style lang="scss">
@import 'src/assets/scss/abstracts';

.reservation {
  background-image: url('../assets/imgs/reservation.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  height: 730px;
  max-height: 730px;

  width: 100%;
}
</style>
