<script>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseTag from "@/components/BaseTag.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";

export default {
  props: {
    title: String,
    tagLabel: String,
    headerClass: String,
    headingClass: String,
    withPlus: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BaseContainer,
    BaseTag,
    PlusIcon,
  },
};
</script>

<template>
  <BaseContainer class="base-section">
    <header
      v-if="title"
      :class="{ 'base-section__header': true, [headerClass]: headerClass }"
    >
      <h2
        :class="{
          heading_40: true,
          'base-section__title': true,
          [headingClass]: headingClass,
        }"
      >
        {{ title }}
      </h2>
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

  @include media-tablet {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  &__header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 20px;
    margin-bottom: 40px;

    @include media-laptop {
      flex-direction: column;
      align-items: flex-start;
    }

    @include media-tablet {
      flex-direction: row;
      align-items: flex-end;
      margin-bottom: 30px;
    }

    @include media-mobile {
      margin-bottom: 20px;
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
    }
  }

  &__plus {
    position: absolute;
    top: 0;
    width: 32px;
    margin-left: -32px;
    margin-top: -32px;

    @include media-tablet {
      display: none;
    }
  }
}
</style>
