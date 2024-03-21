<script>
import BaseStack from "@/components/BaseStack.vue";
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
    CircleIcon,
    IconCart,
    IconGears,
    IconPartners,
  },
};
</script>

<template>
  <div class="opportunities">
    <h3 class="heading_32 opportunities__title">
      <slot />
    </h3>
    <BaseStack spaceBetween asRow class="opportunities__list">
      <div class="opportunities__item" v-for="item in items">
        <CircleIcon class="opportunities__circle-icon">
          <component :is="item.iconName" class="opportunities__icon" />
        </CircleIcon>

        <div class="plain_18 opportunities__text">
          {{ item.text }}
        </div>
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

  @include media-mobile {
    padding: 30px 20px;
    border-radius: 20px;
  }

  &__title {
    margin-bottom: 30px;

    @include media-tablet {
      line-height: 110%;
    }

    @include media-mobile {
      margin-bottom: 20px;
      font-size: 20px;
    }
  }

  &__list {
    display: flex;

    @include media-mobile {
      gap: 16px !important;
      flex-direction: column;
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
