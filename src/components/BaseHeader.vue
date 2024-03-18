<script>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseTabList from "@/components/BaseTabList.vue";
import BaseTag from "@/components/BaseTag.vue";
import IconLogo from "@/components/icons/IconLogo.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconBurger from "@/components/icons/IconBurger.vue";
import IconUser from "@/components/icons/IconUser.vue";
import useDeviceDetection from "@/hooks/useDeviceDetection.js";

export default {
  props: {},
  components: {
    IconLogo,
    IconSearch,
    IconBurger,
    IconUser,
    BaseTag,
    BaseContainer,
    BaseTabList,
  },
  data() {
    return {
      tabs: [
        {
          text: "Организациям и ИП",
          active: true,
          link: "/1",
        },
        {
          text: "Физическим лицам",
          active: false,
          link: "/2",
        },
      ],
      hideInactiveOn: ["laptop"],
      navs: [
        {
          text: "Инвестиции",
          href: "#",
          isActive: true,
        },
        {
          text: "Спрос и кооперация",
          href: "#",
        },
        {
          text: "Поддержка стартапов",
          href: "#",
        },
        {
          text: "Гранты",
          href: "#",
        },
        {
          text: "Инфраструктура",
          href: "#",
        },
        {
          text: "Патентование",
          href: "#",
        },
        {
          text: "Проекты для мегаполиса",
          href: "#",
        },
        {
          text: "О Кластере",
          href: "#",
        },
      ],
    };
  },
  computed: {
    shouldRenderBurger() {
      return useDeviceDetection() === "mobile";
    },
  },
};
</script>

<template>
  <header>
    <div class="header__top">
      <BaseContainer class="header-top__container">
        <div class="header__left">
          <a href="/" class="header__logo-link">
            <IconLogo class="header__logo" />
          </a>
          <BaseTabList
            class="header__tabs"
            :items="tabs"
            :hideInactiveOn="hideInactiveOn"
          />
        </div>
        <div class="header__right">
          <BaseTag
            size="small"
            href="/clusters/lomonosov"
            class="header__cluster"
            >Кластер «Ломоносов»</BaseTag
          >
          <a class="login-block" href="/sing-in">
            <span class="login-block__label plain_14 plain_500">
              Авторизация
            </span>
            <IconUser class="login-block__icon" />
          </a>
          <button class="burger-button">
            <IconBurger class="burger-button__icon" />
          </button>
        </div>
      </BaseContainer>
    </div>
    <div class="header__bottom">
      <BaseContainer class="header__bottom-container">
        <div class="header__nav-wrapper">
          <nav class="nav">
            <ul class="nav__list">
              <li v-for="navItem in navs" :key="navItem.text" class="nav__item">
                <a
                  :href="navItem.href"
                  :class="{
                    nav__link: true,
                    plain_14: true,
                    nav__link_active: navItem.isActive,
                  }"
                >
                  {{ navItem.text }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <button class="button-search">
          <IconSearch class="button-search__icon" />
        </button>
      </BaseContainer>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  &-top__container {
    display: flex;
    justify-content: space-between;

    @include media-tablet {
      justify-content: flex-start;
      gap: 20px;
    }
  }

  &__top {
    display: flex;
    height: 70px;
    border-bottom: 1px solid $gray-35;

    @include media-mobile {
      height: 38px;
    }
  }

  &__left {
    display: flex;
    align-items: stretch;
    gap: 20px;

    @include media-tablet {
      gap: 6px;
    }

    @include media-mobile {
      flex-grow: 1;
    }
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 60px;

    @include media-desktop {
      gap: 30px;
    }

    @include media-laptop {
      gap: 20px;
    }

    @include media-tablet {
      flex-grow: 1;
      justify-content: space-between;
    }

    @include media-tablet-medium {
      justify-content: flex-end;
    }

    @include media-mobile {
      flex-grow: 0;
    }
  }

  &__tabs,
  &__cluster {
    @include media-mobile {
      display: none;
    }
  }

  &__cluster {
    @include media-tablet-medium {
      display: none;
    }
  }

  &__logo-link {
    display: flex;
    align-items: center;
  }

  &__bottom-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  &__bottom {
    height: 48px;
    display: flex;

    @include media-mobile {
      display: none;
    }
  }

  &__nav-wrapper {
    flex: 1;
    display: flex;
    overflow: auto;
    align-items: center;
  }
}

.nav {
  &__list {
    display: flex;
    gap: 42px;
    min-height: min-content;
  }

  @include media-tablet {
    gap: 20px;
  }

  &__item {
    display: flex;
    width: max-content;
  }

  &__link {
    @include media-tablet {
      font-size: 12px;
      font-weight: 400;
    }
  }

  &__link_active {
    text-shadow: $shadow-text-bold;

    @include media-tablet {
      text-shadow: none;
    }
  }
}

.login-block {
  display: flex;
  align-items: center;
  gap: 10px;

  &__label {
    color: #1c1d22;

    @include media-laptop {
      display: none;
    }
  }

  &__button {
    padding: 0;

    @include media-mobile {
      padding: 12px;
    }
  }

  &__icon {
    display: block;
    width: 18px;
  }
}

.button-search {
  margin-left: 10px;
  cursor: pointer;

  &__icon {
    display: block;
    width: 18px;
  }
}

.burger-button {
  display: none;
  cursor: pointer;

  @include media-mobile {
    display: flex;
  }

  &__icon {
    display: block;
    width: 18px;
  }
}
</style>
