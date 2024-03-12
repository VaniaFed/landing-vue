<script>
import BaseParagraph from "@/components/BaseParagraph.vue";
export default {
  props: {
    size: {
      type: String,
      default: "large",
    },
  },
  components: { BaseParagraph },
};
</script>

<template>
  <div :class="['base-tag', `base-tag_${size}`]">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.base-tag {
  height: max-content;
  width: fit-content;
  border-radius: 100px;
  white-space: nowrap;

  &_small {
    padding: 8px 13px;
    font-size: 14px;
    font-weight: 500;
    line-height: 120%;
    border: 1px solid $green;

    @include media-tablet {
      padding: 4px 9px;
      font-size: 12px;
    }
  }

  &_large {
    padding: 14px 24px;
    border: 1px solid $green;
    font-size: 24px;
    line-height: 120%;

    @include media-tablet {
      padding: 14px 24px;
      font-size: 16px;
    }

    @include media-mobile {
      padding: 4px 13px;
      font-size: 20px;
      line-height: 110%;
    }
  }
}
</style>
