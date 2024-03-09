<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import Stack from "@/components/Stack.vue";
import BigWordItem from "@/components/BigWordItem.vue";

export default {
  components: {
    BaseButton,
    BaseContainer,
    BaseHeading,
    BaseParagraph,
    Stack,
    BigWordItem,
  },
  data() {
    return {
      creditData: [
        {
          title: "Сумма кредита",
          text_before: "до",
          big_text: "300",
          text_after: "млн ₽",
        },
        {
          title: "Ставка",
          big_text: "3%",
          text_after: "годовых",
        },
        {
          title: "На срок до",
          big_text: "7",
          text_after: "лет",
        },
      ],
    };
  },
};
</script>

<template>
  <BaseContainer :class="[$style['first-screen']]">
    <Stack gap="40" :class="[$style['first-screen__content']]">
      <div :class="[$style['first-screen__text']]">
        <BaseHeading>Льготные кредиты на&nbsp;инвестиционные цели</BaseHeading>
        <BaseParagraph :class="[$style['first-screen__description']]" size="16"
          >Совместная программа Правительства Москвы, Корпорации МСП и МСП Банка
          для компаний, реализующих инвестиционные проекты в сферах науки,
          промышленности и ИТ</BaseParagraph
        >
      </div>
      <Stack asRow gap="50" :class="[$style['first-screen__details']]">
        <li v-for="data in creditData" :key="data.title">
          <BigWordItem
            :title="data.title"
            :text_before="data.text_before"
            :big_text="data.big_text"
            :text_after="data.text_after"
          />
        </li>
      </Stack>
      <Stack asRow gap="10" :class="[$style['first-screen__buttons']]">
        <BaseButton variant="primary">Подать заявку</BaseButton>
        <BaseButton>Получить консультацию</BaseButton>
      </Stack>
    </Stack>
    <div :class="[$style['first-screen__image-wrapper']]">
      <img
        src="/images/first-screen-banking.png"
        :class="[$style['first-screen__img']]"
      />
      <div :class="[$style['first-screen__blur']]"></div>
    </div>
  </BaseContainer>
</template>

<style lang="scss" module>
.first-screen {
  position: relative;
  max-width: 1400px !important;
  overflow: hidden;
  padding: 70px 80px 83px !important;
  background: $gradient-purple-2;
  color: $white;
  border-radius: 0 0 80px 80px;

  @include media-tablet {
    padding: 40px 32px 102px !important;
    border-radius: 0 0 60px 60px;
  }

  @include media-tablet-small {
    margin: 0;
  }

  @include media-mobile-large {
    padding: 40px 20px !important;
  }

  @include media-mobile {
    border-radius: 0 0 30px 30px;
  }

  &__text {
    max-width: 515px;
    width: 100%;
  }

  &__description {
    margin-top: 10px;
    text-shadow: $shadow-text;

    @include media-tablet-small {
      margin-top: 16px;
      line-height: 19.6px;
    }
  }

  &__details {
    z-index: 5;
    position: relative;

    @include media-laptop {
      flex-direction: column;
      gap: 30px;
    }
  }

  &__content {
    position: relative;
    z-index: 10;
  }

  &__image-wrapper {
    position: absolute;
    right: -100px;
    right: 34px;
    bottom: -140px;

    @include media-desktop-medium {
      right: -130px;
      max-width: 500px;
      bottom: -100px;
    }

    @include media-desktop {
      right: -150px;
      max-width: 510px;
    }

    @include media-laptop {
      max-width: none;
      bottom: -130px;
    }

    @include media-tablet {
      right: -70px;
      bottom: -180px;
    }

    @include media-mobile-large {
      max-width: 300px;
      right: -85px;
      bottom: 34px;
    }
  }

  &__img {
    z-index: 2;
    position: relative;
    max-block-size: unset;
  }

  &__blur {
    z-index: 1;
    position: absolute;
    left: 40px;
    right: 0;
    top: 50%;
    transform: translateY(calc(-50% + 100px));
    width: 220px;
    height: 320px;
    margin: 0 auto;
    background: #e9f8f8;
    filter: blur(400px);
  }
}

.first-screen .first-screen__details {
  @include media-laptop {
    gap: 30px !important;
  }

  @include media-tablet-small {
    gap: 20px !important;
  }
}

.first-screen .first-screen__buttons {
  @include media-tablet-small {
    flex-direction: column;
  }
}
</style>
