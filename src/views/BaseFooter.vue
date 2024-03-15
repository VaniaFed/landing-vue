<script>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import BaseButton from "@/components/BaseButton.vue";
import CircleIcon from "@/components/CircleIcon.vue";
import IconLogoLarge from "@/components/icons/IconLogoLarge.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconMail from "@/components/icons/IconMail.vue";
import IconTelegram from "@/components/icons/IconTelegram.vue";
import IconVk from "@/components/icons/IconVk.vue";

export default {
  props: {},
  components: {
    BaseContainer,
    BaseParagraph,
    BaseButton,
    CircleIcon,
    IconLogoLarge,
    IconPhone,
    IconMail,
    IconTelegram,
    IconVk,
  },
  data() {
    return {
      links: [
        {
          category: "Бизнесу",
          list: [
            {
              href: "#",
              text: "Инвестиции",
            },
            {
              href: "#",
              text: "Поддержка стартапов",
            },
            {
              href: "#",
              text: "Инфраструктура",
            },
            {
              href: "#",
              text: "Проекты для мегаполиса",
            },
            {
              href: "#",
              text: "Истории успеха",
            },
          ],
        },
        {
          category: "\u00A0",
          list: [
            {
              href: "#",
              text: "Спрос и кооперация",
            },
            {
              href: "#",
              text: "Гранты",
            },
            {
              href: "#",
              text: "Патентование",
            },
            {
              href: "#",
              text: "О Кластере",
            },
            {
              href: "#",
              text: "Календарь мероприятий",
            },
          ],
        },
        {
          category: "Новаторам",
          list: [
            {
              href: "#",
              text: "Создание стартапов",
            },
            {
              href: "#",
              text: "Академия инноваторов",
            },
            {
              href: "#",
              text: "Обучение",
            },
            {
              href: "#",
              text: "Венчурная академия",
            },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <footer class="base-footer">
    <BaseContainer>
      <div class="base-footer__top">
        <div class="base-footer__contacts contacts">
          <div class="contacts__top">
            <a href="/">
              <IconLogoLarge class="base-footer__logo" />
            </a>
            <div class="contacts__socials">
              <CircleIcon class="contacts__circle-icon">
                <IconTelegram />
              </CircleIcon>
              <CircleIcon class="contacts__circle-icon">
                <IconVk />
              </CircleIcon>
            </div>
          </div>
          <div class="contacts__bottom">
            <div class="contacts__links">
              <a class="link" href="tel:8 495 870-45-55">
                <i class="link__icon-wrapper">
                  <IconPhone class="link__icon" />
                </i>
                <BaseParagraph size="16">8 495 870-45-55</BaseParagraph>
              </a>
              <a class="link" href="mailto:">
                <i class="link__icon-wrapper">
                  <IconMail class="link__icon" />
                </i>
                <BaseParagraph size="16">support@i.moscow</BaseParagraph>
              </a>
            </div>
            <BaseButton class="contacts__button">Служба поддержки</BaseButton>
          </div>
        </div>
        <div class="base-footer__links">
          <div class="base-footer__column" v-for="link in links">
            <BaseParagraph class="column__heading" weight="500">{{
              link.category
            }}</BaseParagraph>
            <div class="column__links">
              <a
                class="column__link"
                :href="linkItem.href"
                v-for="linkItem in link.list"
              >
                <BaseParagraph size="16">
                  {{ linkItem.text }}
                </BaseParagraph>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="base-footer__bottom">
        <BaseParagraph size="14" class="base-footer__user-agreement"
          >Соглашение о пользовании информационной системы обеспечения
          деятельности инновационного кластера на территории города
          Москвы</BaseParagraph
        >
      </div>
    </BaseContainer>
  </footer>
</template>

<style scoped lang="scss">
.base-footer {
  border-top: 1px solid $gray-3;

  &__top {
    display: flex;
    gap: 188px;
    margin-bottom: 86px;
    padding-top: 70px;

    @include media-laptop {
      gap: 90px;
    }

    @include media-tablet {
      padding-top: 41px;
      gap: 62px;
    }
  }

  &__bottom {
    padding: 28px 0;
    border-top: 1px solid $gray-3;
  }

  &__logo {
    width: 222px;

    @include media-tablet {
      width: 179px;
    }
  }

  &__links {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;

    @include media-tablet {
      flex-grow: 20px;
      margin-right: -20px;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @include media-tablet {
      gap: 20px;
      width: 50%;
    }
  }

  &__user-agreement {
    color: $text-tertiary;
  }
}

.column {
  &__links {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include media-tablet {
      gap: 17px;
    }
  }

  &__link {
    @include media-tablet {
      font-size: 14px;
      line-height: 120%;
    }
  }
}

.contacts {
  &__bottom {
    margin-top: 50px;

    @include media-tablet {
      margin-top: 24px;
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @include media-tablet {
      gap: 16px;
    }
  }

  &__button {
    margin-top: 24px;
  }

  &__socials {
    display: flex;
    gap: 9px;
    margin-top: 55px;

    @include media-tablet {
      margin-top: 34px;
    }
  }

  &__circle-icon {
    width: 40px;
    height: 40px;
    background: $gradient-green;
  }
}

.link {
  display: flex;
  align-items: center;
  gap: 10px;

  &__icon-wrapper {
    display: flex;
  }

  &__icon {
    width: 18px;
  }
}
</style>
