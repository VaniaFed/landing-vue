<script>
import BaseContainer from "@/components/BaseContainer.vue";
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
          additionalClass: "links-part",
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
              <a class="link plain_16" href="tel:8 495 870-45-55">
                <i class="link__icon-wrapper">
                  <IconPhone class="link__icon" />
                </i>
                8 495 870-45-55
              </a>
              <a class="link plain_16" href="mailto:">
                <i class="link__icon-wrapper">
                  <IconMail class="link__icon" />
                </i>
                support@i.moscow
              </a>
            </div>
            <BaseButton class="contacts__button">Служба поддержки</BaseButton>
          </div>
        </div>
        <div class="base-footer__links">
          <div
            :class="{
              'base-footer__column': true,
              [link.additionalClass]: link.additionalClass,
            }"
            v-for="link in links"
          >
            <span class="plain_18 plain_500 column__heading">{{
              link.category
            }}</span>
            <div class="column__links">
              <a
                class="plain_16 column__link"
                :href="linkItem.href"
                v-for="linkItem in link.list"
              >
                {{ linkItem.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="base-footer__bottom">
        <span class="plain_14 base-footer__user-agreement">
          Соглашение о пользовании информационной системы обеспечения
          деятельности инновационного кластера на территории города Москвы
        </span>
      </div>
    </BaseContainer>
  </footer>
</template>

<style scoped lang="scss">
.base-footer {
  margin-top: 40px;
  border-top: 1px solid $gray-3;

  // TODO: check this later
  @include media-tablet {
    margin-top: 20px;
  }

  @include media-mobile {
    margin-top: 60px;
  }

  &__top {
    display: flex;
    gap: 188px;
    margin-bottom: 86px;
    padding-top: 70px;

    @include media-laptop {
      gap: 90px;
    }

    @include media-tablet {
      margin-bottom: 60px;
      padding-top: 41px;
      gap: 62px;
    }

    @include media-mobile {
      margin-bottom: 40px;
      text-align: center;
    }
  }

  &__bottom {
    padding: 28px 0;
    border-top: 1px solid $gray-3;

    @include media-tablet {
      padding-top: 17px;
      padding-bottom: 16px;
    }

    @include media-mobile {
      margin: 0 -20px;
      padding: 11px 20px 14px;
    }
  }

  &__logo {
    width: 222px;

    @include media-tablet {
      width: 179px;
    }

    @include media-mobile {
      width: 179px;
    }
  }

  &__links {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 30px;

    @include media-tablet {
      justify-content: flex-start;
      gap: 70px;
    }

    @include media-mobile {
      display: none;
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @include media-tablet {
      gap: 20px;
    }
  }

  &__user-agreement {
    display: block;
    color: $text-tertiary;

    @include media-mobile {
      font-size: 12px;
    }
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

.links-part {
  @include media-tablet {
    order: 1;
    width: 100%;
    margin-top: -95px;
  }
}

.contacts {
  @include media-mobile {
    width: 100%;
  }

  &__bottom {
    margin-top: 50px;

    @include media-tablet {
      margin-top: 24px;
    }

    @include media-mobile {
      margin-top: 20px;
    }
  }

  &__links {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @include media-tablet {
      gap: 16px;
    }

    @include media-mobile {
      align-items: center;
    }
  }

  &__button {
    margin-top: 24px;

    @include media-mobile {
      width: 100%;
      margin-top: 20px;
    }
  }

  &__socials {
    display: flex;
    gap: 9px;
    margin-top: 55px;

    @include media-tablet {
      margin-top: 34px;
    }

    @include media-mobile {
      justify-content: center;
      margin-top: 25px;
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

  @include media-mobile {
    font-size: 14px;
    line-height: 120%;
  }

  &__icon-wrapper {
    display: flex;
  }

  &__icon {
    width: 18px;
  }
}
</style>
