<script>
import BaseButton from "@/components/BaseButton.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseStack from "@/components/BaseStack.vue";
import BigWordItem from "@/components/BigWordItem.vue";

export default {
  components: {
    BaseButton,
    BaseContainer,
    BaseStack,
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
  // TODO: img parallax
};
</script>

<template>
  <BaseContainer class="first-screen">
    <BaseStack gap="40" class="first-screen__content">
      <div class="first-screen__text">
        <h1 class="heading_40">Льготные кредиты на&nbsp;инвестиционные цели</h1>
        <span class="plain_16 first-screen__description">
          Совместная программа Правительства Москвы, Корпорации МСП и МСП Банка
          для компаний, реализующих инвестиционные проекты в сферах науки,
          промышленности и ИТ
        </span>
      </div>
      <ul class="first-screen__details">
        <li v-for="item in creditData" :key="item.title">
          <BigWordItem
            :title="item.title"
            :text_before="item.text_before"
            :big_text="item.big_text"
            :text_after="item.text_after"
          />
        </li>
      </ul>
      <BaseStack asRow gap="10" class="first-screen__buttons">
        <BaseButton variant="primary">Подать заявку</BaseButton>
        <BaseButton>Получить консультацию</BaseButton>
      </BaseStack>
    </BaseStack>
    <div class="first-screen__image-wrapper">
      <img src="/images/first-screen-banking.png" class="first-screen__img" />
      <div class="first-screen__blur"></div>
    </div>
  </BaseContainer>
</template>

<style lang="scss" scoped>
.first-screen {
  position: relative;
  max-width: 1400px;
  overflow: hidden;
  padding: 70px 80px 83px;
  background: $gradient-purple-2;
  color: $white;
  border-radius: 0 0 80px 80px;

  @include media-tablet {
    padding: 40px 32px 102px;
    border-radius: 0 0 60px 60px;
  }

  @include media-mobile {
    padding: 40px 20px;
    border-radius: 0 0 30px 30px;
  }

  &__text {
    max-width: 515px;
    width: 100%;
  }

  &__description {
    display: block;
    margin-top: 10px;
    text-shadow: $shadow-text;

    @include media-mobile {
      margin-top: 16px;
      line-height: 19.6px;
    }
  }

  &__details {
    z-index: 5;
    position: relative;
    display: flex;
    gap: 50px;

    @include media-tablet {
      flex-direction: column;
      gap: 30px;
    }

    @include media-mobile {
      gap: 20px;
    }
  }

  &__content {
    position: relative;
    z-index: 10;

    @include media-mobile {
      gap: 30px !important;
    }
  }

  &__image-wrapper {
    position: absolute;
    right: -100px;
    right: 34px;
    bottom: -140px;

    @include media-desktop-small {
      right: -130px;
      max-width: 500px;
      bottom: -100px;
    }

    @include media-laptop {
      right: -150px;
      max-width: 510px;
    }

    @include media-tablet {
      bottom: -230px;
      max-width: 1000px;
      width: 710px;
      right: -103px;
    }

    @include media-mobile {
      right: -85px;
      bottom: 30px;
      max-width: 300px;
    }
  }

  &__img {
    z-index: 2;
    position: relative;
    width: 100%;
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

    @include media-tablet {
      display: none;
    }
  }
}

.first-screen .first-screen__buttons {
  @include media-mobile {
    flex-direction: column;
  }
}
</style>
