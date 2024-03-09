<script>
import Paragraph from "@/components/Paragraph.vue";
import Stack from "@/components/Stack.vue";
import Heading from "@/components/Heading.vue";

export default {
  props: ["title", "text_before", "big_text", "text_after"],
  components: { Paragraph, Stack, Heading },
};
</script>

<template>
  <Paragraph :class="[$style['big-word-item__title']]">{{ title }}</Paragraph>
  <Stack gap="10" asRow :class="[$style['big-word-item__list']]">
    <Heading v-if="text_before !== undefined" level="h3" variant="medium_24">{{
      text_before
    }}</Heading>
    <Heading level="h3" variant="great">{{ big_text }}</Heading>
    <Heading v-if="text_after !== undefined" level="h3" variant="medium_24">{{
      text_after
    }}</Heading>
  </Stack>
</template>

<style module lang="scss">
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
