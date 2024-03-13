<script>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseTag from "@/components/BaseTag.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";

export default {
  props: {
    title: String,
    tagLabel: String,
    headerClass: String,
    withPlus: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BaseContainer,
    BaseHeading,
    BaseTag,
    PlusIcon,
  },
};
</script>

<template>
  <BaseContainer class="base-section">
    <header
      :class="{ 'base-section__header': true, [headerClass]: headerClass }"
    >
      <BaseHeading class="base-section__title">
        {{ title }}
      </BaseHeading>
      <BaseTag v-if="tagLabel" size="large">
        {{ tagLabel }}
      </BaseTag>
      <PlusIcon v-if="withPlus" class="base-section__plus" />
    </header>
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

  &__plus {
    position: absolute;
    width: 32px;
    margin-left: -32px;
    margin-top: -32px;

    @include media-tablet {
      display: none;
    }
  }
}
</style>
