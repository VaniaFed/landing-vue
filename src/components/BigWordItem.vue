<script>
import BaseStack from "@/components/BaseStack.vue";

export default {
  props: ["title", "text_before", "big_text", "text_after"],
  components: { BaseStack },
};
</script>

<template>
  <span class="plain_18 big-word-item__title">{{ title }}</span>

  <BaseStack gap="10" asRow class="big-word-item__list">
    <span
      class="heading_24 big-word-item__before"
      v-if="text_before !== undefined"
    >
      {{ text_before }}
    </span>
    <span class="heading_great">{{ big_text }}</span>
    <span
      v-if="text_after !== undefined"
      class="heading_24 big-word-item__after"
    >
      {{ text_after }}
    </span>
  </BaseStack>
</template>

<style lang="scss">
.big-word-item {
  &__title {
    display: block;
    margin-bottom: 18px;

    @include media-tablet {
      margin-bottom: 4px;
    }

    @include media-mobile {
      margin-bottom: 2px;
      font-size: 16px !important;
    }
  }

  &__list {
    align-items: baseline;
  }

  &__before,
  &__after {
    @include media-mobile {
      font-size: 18px !important;
    }
  }
}
</style>
