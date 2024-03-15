<script>
import BaseCard from "@/components/BaseCard.vue";
export default {
  props: {},
  components: { BaseCard },
};
</script>

<template>
  <BaseCard class="requirements-card">
    <template v-for="(_, slot) of $slots" v-slot:[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
  </BaseCard>
</template>

<style scoped lang="scss">
.requirements-card {
  gap: 20px;

  @include media-tablet {
    padding: 20px;
  }

  @include media-mobile {
    border-radius: 20px;
  }
}
</style>
