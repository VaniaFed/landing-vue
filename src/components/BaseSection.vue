<script>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseHeading from "@/components/BaseHeading.vue";

export default {
  props: {
    title: {
      type: String,
    },
  },
  components: {
    BaseContainer,
    BaseHeading,
  },
};
</script>

<template>
  <BaseContainer class="base-section">
    <BaseHeading class="base-section__title">
      {{ title }}
    </BaseHeading>
    <!-- TODO: description -->
    <!-- <BaseParagraph>{{ description }}</BaseParagraph> -->
    <slot />
  </BaseContainer>
</template>

<style scoped lang="scss">
.base-section {
  padding-top: 60px;
  padding-bottom: 60px;

  &__title {
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
