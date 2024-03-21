<script>
import BaseSection from "@/components/BaseSection.vue";
import BaseButton from "@/components/BaseButton.vue";
import IconMembers from "@/components/icons/IconMembers.vue";

export default {
  props: {},
  components: {
    BaseSection,
    BaseButton,
    IconMembers,
  },
};
</script>

<template>
  <BaseSection
    title="Кто может получить кредит на льготных условиях"
    withPlus
    class="who-can-get-credit"
  >
    <div class="card">
      <div class="card__content">
        <div class="card__top">
          <h4 class="heading_32 card__title">
            Компании из Реестра стартапов и технологических компаний
          </h4>
          <span class="plain_18 card__text">
            В столице появился Реестр стартапов и технологических компаний.
            Её участниками могут стать московские инновационные компании.
            Они получают упрощённый доступ к мерам поддержки от города.
          </span>
        </div>
        <div class="card__credit-to-all">
          <div class="card__icon-wrapper">
            <IconMembers class="card__icon" />
          </div>
          <span class="plain_16 card__paragraph">
            Все участники Реестра могут получить льготный кредит
            <bold class="card__paragraph_bold">
              вне зависимости от сферы деятельности
            </bold>
            при соответствии основным требованиям для заемщиков
          </span>
        </div>
        <BaseButton variant="primary" class="card__button"
          >Подробнее о Реестре</BaseButton
        >
      </div>
      <picture>
        <source
          srcset="/images/register-mobile.png"
          media="(max-width: 768px)"
          class="card__img"
        />
        <source
          srcset="/images/register-tablet.png"
          media="(max-width: 1024px)"
          class="card__img"
        />
        <img
          src="/images/register-desktop.png"
          alt="register"
          class="card__img"
        />
      </picture>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.who-can-get-credit {
  @include media-mobile {
    padding-top: 20px;
  }
}

.card {
  overflow: hidden;
  position: relative;
  padding: 60px;
  background: $gradient-purple;
  border-radius: 60px;
  color: $white;

  @include media-tablet {
    padding: 40px;
    padding-bottom: 60px;
    border-radius: 30px;
  }

  @include media-mobile {
    padding: 30px 20px 40px;
  }

  &__content {
    z-index: 10;
    position: relative;
    padding-right: 420px;

    @include media-tablet {
      padding-right: 130px;
    }

    @include media-mobile {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-right: 0;
    }
  }

  &__title {
    @include media-mobile {
      font-size: 16px;
      line-height: 113%;
    }
  }

  &__text {
    display: block;
    margin-top: 20px;

    @include media-tablet {
      line-height: 19.2px;
    }

    @include media-mobile {
      line-height: 140%;
    }
  }

  &__credit-to-all {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 40px;

    @include media-mobile {
      align-items: flex-start;
      margin-top: 30px;
    }
  }

  &__icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    background: $white;
    border-radius: 100px;

    @include media-mobile {
      width: 60px;
      height: 60px;
    }
  }

  &__icon {
    width: 54px;
    height: 54px;

    @include media-mobile {
      height: 40px;
    }
  }

  &__paragraph {
    display: inline-block;
    line-height: 24px;
    max-width: 430px;

    @include media-tablet {
      max-width: 300px;
      line-height: 16.8px;
    }

    @include media-mobile {
      font-size: 12px;
      line-height: 120%;
    }

    &_bold {
      font-weight: 500;
    }
  }

  &__button {
    margin-top: 40px;

    @include media-mobile {
      margin-top: 208px;
    }
  }

  &__img {
    z-index: 5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;

    @include media-mobile {
      width: 100%;
      object-fit: cover;
      object-position: center 85%;
    }
  }
}
</style>
