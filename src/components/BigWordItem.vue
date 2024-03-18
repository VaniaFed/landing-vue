<script>
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseStack from "@/components/BaseStack.vue";

export default {
  props: ["title", "text_before", "big_text", "text_after"],
  components: { BaseParagraph, BaseStack },
};
</script>

<template>
  <BaseParagraph class="big-word-item__title">{{ title }}</BaseParagraph>
  <BaseStack gap="10" asRow class="big-word-item__list">
    <h4
      class="heading_24 big-word-item__before"
      v-if="text_before !== undefined"
    >
      {{ text_before }}
    </h4>
    <h3 class="heading_great">{{ big_text }}</h3>
    <h4 v-if="text_after !== undefined" class="heading_24 big-word-item__after">
      {{ text_after }}
    </h4>
  </BaseStack>
</template>

<style lang="scss">
.big-word-item {
  &__title {
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
