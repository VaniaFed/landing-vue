<script>
import BaseHeading from "@/components/BaseHeading.vue";
export default {
  props: {},
  components: { BaseHeading },
};
</script>

<template>
  <BaseHeading class="base-tag" level="5" variant="medium_24">
    <template v-slot:default>
      <slot />
    </template>
  </BaseHeading>
</template>

<style scoped lang="scss">
.base-tag {
  height: max-content;
  padding: 14px 24px;
  border: 1px solid #16ff00;
  border-radius: 70px;
  white-space: nowrap;

  @include media-tablet {
    font-size: 16px;
    line-height: 19.2px;
  }

  @include media-mobile {
    padding: 4px 13px;
    font-size: 20px;
    line-height: 22;
  }
}
</style>
