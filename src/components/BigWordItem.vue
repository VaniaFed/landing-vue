<script>
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseStack from "@/components/BaseStack.vue";
import BaseHeading from "@/components/BaseHeading.vue";

export default {
  props: ["title", "text_before", "big_text", "text_after"],
  components: { BaseParagraph, BaseStack, BaseHeading },
};
</script>

<template>
  <BaseParagraph class="big-word-item__title">{{ title }}</BaseParagraph>
  <BaseStack gap="10" asRow class="big-word-item__list">
    <BaseHeading
      v-if="text_before !== undefined"
      level="h3"
      variant="medium_24"
      >{{ text_before }}</BaseHeading
    >
    <BaseHeading level="h3" variant="great">{{ big_text }}</BaseHeading>
    <BaseHeading
      v-if="text_after !== undefined"
      level="h4"
      variant="medium_24"
      >{{ text_after }}</BaseHeading
    >
  </BaseStack>
</template>

<style lang="scss">
.big-word-item__title {
  margin-bottom: 18px;

  @include media-tablet {
    margin-bottom: 4px;
  }

  @include media-mobile-large {
    margin-bottom: 2px;
  }
}

.big-word-item__list {
  align-items: baseline;
}
</style>
