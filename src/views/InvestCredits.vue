<script>
import BaseHeading from "@/components/BaseHeading.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseSection from "@/components/BaseSection.vue";
import BaseStack from "@/components/BaseStack.vue";
import CircleIcon from "@/components/CircleIcon.vue";
import IconCart from "@/components/icons/IconCart.vue";
import IconGears from "@/components/icons/IconGears.vue";
import IconPartners from "@/components/icons/IconPartners.vue";

export default {
  props: {},
  components: {
    BaseSection,
    BaseHeading,
    BaseParagraph,
    BaseStack,
    CircleIcon,
    IconCart,
    IconGears,
    IconPartners,
  },
  data() {
    return {
      opportunities: [
        {
          text: "Модернизацию и\u00A0расширение производства",
          iconName: "IconGears",
        },
        { text: "Приобретение нового оборудования", iconName: "IconCart" },
        {
          text: "Приобретение производственных площадей",
          iconName: "IconPartners",
        },
      ],
    };
  },
};
</script>

<template>
  <BaseSection
    title="Льготные кредиты на инвестиционные цели для субъектов МСП"
    class="invest-credits"
  >
    <div class="opportunities">
      <BaseHeading class="opportunities__title" variant="medium_32"
        >На что можно потратить льготный кредит</BaseHeading
      >
      <BaseStack spaceBetween asRow class="opportunities__list">
        <div class="opportunities__item" v-for="oppItem in opportunities">
          <CircleIcon class="invest-credits__circle-icon">
            <component :is="oppItem.iconName" class="invest-credits__icon" />
          </CircleIcon>
          <BaseParagraph class="opportunities__text">
            {{ oppItem.text }}
          </BaseParagraph>
        </div>
      </BaseStack>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.invest-credits {
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
}
</style>
