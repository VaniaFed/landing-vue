<script>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseTag from "@/components/BaseTag.vue";

export default {
  props: {
    title: String,
    tagLabel: String,
  },
  components: {
    BaseContainer,
    BaseHeading,
    BaseTag,
  },
};
</script>

<template>
  <BaseContainer class="base-section">
    <header class="base-section__header">
      <BaseHeading class="base-section__title">
        {{ title }}
      </BaseHeading>
      <BaseTag>
        {{ tagLabel }}
      </BaseTag>
    </header>
    <!-- TODO: description -->
    <!-- <BaseParagraph>{{ description }}</BaseParagraph> -->
    <slot />
  </BaseContainer>
</template>

<style scoped lang="scss">
.base-section {
  padding-top: 60px;
  padding-bottom: 60px;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    @include media-tablet {
      margin-bottom: 30px;
    }

    @include media-mobile-large {
      margin-bottom: 20px;
    }
  }
}
</style>
