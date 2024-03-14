<script>
import BaseSection from "@/components/BaseSection.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseButton from "@/components/BaseButton.vue";
import IconMembers from "@/components/icons/IconMembers.vue";

export default {
  props: {},
  components: {
    BaseSection,
    BaseHeading,
    BaseParagraph,
    BaseButton,
    IconMembers,
  },

  // TODO: img parallax
};
</script>

<template>
  <BaseSection title="Кто может получить кредит на льготных условиях" withPlus>
    <div class="card">
      <div class="card__content">
        <div class="card__top">
          <BaseHeading class="card__title" variant="medium_32" level="h3">
            Компании из Реестра стартапов и технологических компаний
          </BaseHeading>
          <BaseParagraph class="card__text">
            В столице появился Реестр стартапов и технологических компаний.
            Её участниками могут стать московские инновационные компании.
            Они получают упрощённый доступ к мерам поддержки от города.
          </BaseParagraph>
        </div>
        <div class="card__credit-to-all">
          <div class="card__icon-wrapper">
            <IconMembers class="card__icon" />
          </div>
          <BaseParagraph class="card__paragraph" size="16">
            Все участники Реестра могут получить льготный кредит
            <bold class="card__paragraph_bold"
              >вне зависимости от сферы деятельности</bold
            >
            при соответствии основным требованиям для заемщиков</BaseParagraph
          >
        </div>
        <BaseButton variant="primary" class="card__button"
          >Подробнее о Реесте</BaseButton
        >
      </div>
      <img
        src="/images/user-from-list.png"
        alt="user from list"
        class="card__img"
      />
      <img src="/images/vector-1.png" class="card__vector vector-1" />
      <img src="/images/vector-2.png" class="card__vector vector-2" />
      <img src="/images/vector-3.png" class="card__vector vector-3" />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
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
    max-width: 612px;

    @include media-tablet {
      max-width: 500px;
    }

    @include media-mobile {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  &__text {
    margin-top: 20px;
    @include media-tablet {
      line-height: 19.2px;
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
  }

  &__icon {
    width: 54px;
    height: 54px;
  }

  &__paragraph {
    display: inline-block;
    line-height: 24px;
    max-width: 430px;

    @include media-tablet {
      max-width: 300px;
      line-height: 16.8px;
    }

    &_bold {
      font-weight: 500;
    }
  }

  &__button {
    margin-top: 40px;
  }

  &__img {
    position: absolute;
    z-index: 7;
    top: 0;
    right: 11px;

    @include media-tablet {
      width: 320px;
      bottom: 18px;
      right: -22px;
      top: unset;
    }
  }
}

// TODO: доделать векторы для tablet и mobile
.card__vector {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  user-select: none;
  max-block-size: unset;
}

.vector-3 {
  z-index: 8;

  @include media-tablet {
    top: -35px;
    right: -90px;
    height: 110%;
    transform: rotate(3deg);
  }
}

.vector-2 {
  z-index: 6;
}

.vector-1 {
  z-index: 1;
}
</style>
