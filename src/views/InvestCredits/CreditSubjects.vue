<script>
import CircleIcon from "@/components/CircleIcon.vue";
import IconMspBank from "@/components/icons/IconMspBank.vue";

export default {
  props: {},
  components: {
    CircleIcon,
    IconMspBank,
  },
};
</script>

<template>
  <div class="credit-subjects">
    <div class="credit-subjects__item">
      <div class="credit-subjects__icons">
        <CircleIcon class="credit-subjects__icon-button">
          <IconMspBank class="credit-subjects__icon" />
        </CircleIcon>
        <CircleIcon class="credit-subjects__icon-button">
          <img
            class="icon-msp-corp"
            src="/images/msp-corp.png"
            alt="Корпорация МСП"
          />
        </CircleIcon>
      </div>
      <div class="credit-subjects__texting">
        <span class="plain_18 plain_500 credit-subjects__title"
          >МСП Банк и&nbsp;Корпорация МСП</span
        >
        <span class="plain_18 credit-subjects__text"
          >выдают заемные средства</span
        >
      </div>
    </div>
    <div class="credit-subjects__item">
      <div class="credit-subjects__icons">
        <CircleIcon class="credit-subjects__icon-button">
          <img
            class="icon-msk-gov"
            src="/images/moscow-government.png"
            alt="Правительство Москвы"
          />
        </CircleIcon>
      </div>
      <div class="credit-subjects__texting">
        <span class="plain_18 plain_500 credit-subjects__title"
          >Правительство Москвы</span
        >
        <span class="plain_18 credit-subjects__text"
          >субсидирует ставку по кредиту</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.credit-subjects {
  display: flex;
  gap: 90px;

  @include media-laptop {
    gap: 30px;
    flex-direction: column;
  }

  @include media-tablet {
    flex-direction: column;
    gap: 20px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include media-tablet {
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

    @include media-mobile {
      gap: 16px;
    }
  }

  &__icons {
    display: flex;

    :not(:first-child) {
      margin-left: -10px;

      @include media-tablet {
        margin-left: -19px;
      }

      @include media-mobile {
        margin-left: 0;
        margin-top: -8px;
      }
    }

    @include media-mobile {
      flex-direction: column;
    }
  }

  &__icon-button {
    background: $gray-4;

    @include media-mobile {
      width: 46px;
      height: 46px;
    }
  }

  &__icon {
    width: 58.2px;

    @include media-mobile {
      width: 30px;
    }
  }

  &__title {
    display: block;

    @include media-tablet {
      max-width: 189px;
      line-height: 120%;
    }

    @include media-mobile {
      font-size: 16px;
      line-height: 112%;
    }
  }

  &__text {
    display: block;
    margin-top: 10px;

    @include media-tablet {
      margin-top: 6px;
      max-width: 170px;
      line-height: 120%;
    }

    @include media-mobile {
      max-width: none;
      line-height: 140%;
    }
  }
}

.icon-msp-corp {
  width: 50px;

  @include media-mobile {
    width: 23px;
  }
}

.icon-msk-gov {
  height: 52px;

  @include media-mobile {
    height: 24px;
  }
}
</style>
