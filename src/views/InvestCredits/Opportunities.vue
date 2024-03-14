<script>
import BaseStack from "@/components/BaseStack.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import CircleIcon from "@/components/CircleIcon.vue";
import IconGears from "@/components/icons/IconGears.vue";
import IconCart from "@/components/icons/IconCart.vue";
import IconPartners from "@/components/icons/IconPartners.vue";

export default {
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  components: {
    BaseStack,
    BaseHeading,
    BaseParagraph,
    CircleIcon,
    IconCart,
    IconGears,
    IconPartners,
  },
};
</script>

<template>
  <div class="opportunities">
    <BaseHeading class="opportunities__title" variant="medium_32" level="h3">
      <slot />
    </BaseHeading>
    <BaseStack spaceBetween asRow class="opportunities__list">
      <div class="opportunities__item" v-for="item in items">
        <CircleIcon class="opportunities__circle-icon">
          <component :is="item.iconName" class="opportunities__icon" />
        </CircleIcon>
        <BaseParagraph class="opportunities__text">
          {{ item.text }}
        </BaseParagraph>
      </div>
    </BaseStack>
  </div>
</template>

<style scoped lang="scss">
.opportunities {
  padding: 40px;
  box-shadow: $shadow-2;
  border-radius: 30px;

  @include media-tablet {
    padding: 40px 30px;
  }

  @include media-mobile-large {
    padding: 30px 20px;
    border-radius: 20px;
  }

  &__title {
    margin-bottom: 30px;

    @include media-tablet {
      line-height: 110%;
    }

    @include media-mobile-large {
      margin-bottom: 20px;
      font-size: 20px;
    }
  }

  &__list {
    display: flex;
    @media (max-width: 720px) {
      flex-direction: column !important;
    }

    @include media-mobile-large {
      gap: 16px !important;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 20px;

    @include media-tablet {
      gap: 16px;
    }
  }

  &__text {
    max-width: 251px;

    @include media-tablet {
      font-size: 14px;
      line-height: 120%;
    }
  }

  &__circle-icon {
    width: 94px !important;
    height: 94px !important;
    box-shadow: $shadow-2;

    @include media-tablet {
      width: 60px !important;
      height: 60px !important;
    }
  }

  &__icon {
    width: 54px;

    @include media-tablet {
      width: 34.47px;
    }
  }
}
</style>
