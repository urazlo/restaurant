<template>
  <div class="divider"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Divider extends Vue {
}
</script>

<style lang="scss">
//@import 'src/assets/scss/app.scss';

.divider {
  border-left: 1px solid var(--white);
}
</style>
