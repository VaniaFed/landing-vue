<script>
import BaseSection from "@/components/BaseSection.vue";

export default {
  props: {},
  components: { BaseSection },
};
</script>

<template>
  <BaseSection class="any-questions-container">
    <div class="any-questions">
      <div class="any-questions__top">
        <h2 class="heading_40 any-questions__title">Остались вопросы?</h2>
        <h3 class="heading_24 any-questions__subtitle">Свяжитесь с нами</h3>
      </div>
      <div class="contacts">
        <div class="contacts__item">
          <span class="plain_16 contacts__key">Телефон</span>
          <a
            href="tel:+7 499 577 00 55 доб 1"
            class="heading_40 contacts__value"
          >
            +7 499 577 00 55 доб 1
          </a>
        </div>
        <div class="contacts__item">
          <span class="plain_16 contacts__key">Почта</span>
          <a
            href="mailto:measures@cluster.mos.ru"
            class="heading_40 contacts__value"
          >
            measures@cluster.mos.ru
          </a>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.any-questions {
  padding: 50px 60px;
  background: url("/images/gradient-dark.png"), $dark;
  background-position: 75% bottom;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;

  @include media-mobile {
    padding: 30px 20px 40px !important;
  }

  &__top {
    margin-bottom: 40px;

    @include media-tablet {
      margin-bottom: 50px;
    }

    @include media-mobile {
      margin-bottom: 30px;
    }
  }

  &__title,
  &__subtitle {
    color: $white;
  }

  &__title {
    margin-bottom: 10px;
  }

  &__subtitle {
    @include media-mobile {
      font-size: 18px;
      line-height: 120%;
    }
  }
}

.contacts {
  display: flex;
  gap: 60px;

  @include media-tablet {
    flex-direction: column;
    gap: 20px;
  }

  @include media-mobile {
    gap: 10px;
  }

  &__key {
    display: block;
    margin-bottom: 2px;
    color: $gray-12;
    line-height: 120%;

    @include media-mobile {
      line-height: 140%;
    }
  }

  &__value {
    background: $gradient-green-2;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    &:hover {
      background: $green;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &:active {
      background: $aqua;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @include media-laptop {
      font-size: 30px;
    }

    @include media-mobile {
      font-size: 20px;
    }
  }
}

.any-questions-container {
  @include media-mobile {
    padding: 0 !important;
  }
}
</style>
