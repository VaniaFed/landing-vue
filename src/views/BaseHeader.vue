<script>
import BaseContainer from "@/components/BaseContainer.vue";
import BaseTabList from "@/components/BaseTabList.vue";
import HeaderLogin from "@/components/HeaderLogin.vue";
import BaseTag from "@/components/BaseTag.vue";
import IconLogo from "@/components/icons/IconLogo.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconBurger from "@/components/icons/IconBurger.vue";
import useDeviceDetection from "@/hooks/useDeviceDetection.js";
import IconButton from "@/components/IconButton.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";

export default {
  props: {},
  components: {
    IconButton,
    IconLogo,
    IconSearch,
    IconBurger,
    BaseTag,
    HeaderLogin,
    BaseContainer,
    BaseTabList,
    BaseParagraph,
  },
  data() {
    return {
      tabs: [
        {
          text: "Организациям и ИП",
          active: true,
        },
        {
          text: "Физическим лицам",
          active: false,
        },
      ],
      hideInactiveOn: ["laptop"],
      navs: [
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
            :items="tabs"
            class="header__tabs"
            :hideInactiveOn="hideInactiveOn"
          />
        </div>
        <div class="header__right">
          <a href="/clusters/lomonosov" class="header__cluster">
            <BaseTag size="small">Кластер «Ломоносов»</BaseTag>
          </a>
          <div class="login-block">
            <HeaderLogin />
          </div>
          <IconButton class="header__burger-button">
            <IconBurger class="header__burger-icon" />
          </IconButton>
        </div>
      </BaseContainer>
    </div>
    <div class="header__bottom">
      <BaseContainer class="header__bottom-container">
        <BaseParagraph class="header__category" size="14" weight="600">
          Инвестиции
        </BaseParagraph>
        <div class="header__nav-wrapper">
          <nav class="header__nav">
            <li v-for="navItem in navs" :key="navItem.text" class="nav__item">
              <a :href="navItem">
                <BaseParagraph size="14" class="nav__paragraph">
                  {{ navItem.text }}
                </BaseParagraph>
              </a>
            </li>
          </nav>
        </div>
        <IconSearch class="header__search-icon" />
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
      gap: 0px;
      margin-right: -14px;
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

  &__search-icon {
    width: 18px;
    margin-left: 10px;
  }

  &__burger {
    &-icon {
      width: 18px;
    }

    &-button {
      display: none;

      @include media-mobile {
        display: flex;
      }
    }
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

  &__category {
    display: flex;
    align-items: center;
    margin-right: 42px;
    text-shadow: $shadow-text-bold;

    @include media-tablet {
      margin-right: 20px;
      font-size: 12px;
      font-weight: 400;
      text-shadow: none;
    }
  }

  &__nav-wrapper {
    flex: 1;
    display: flex;
    overflow: auto;
    align-items: center;
  }

  &__nav {
    display: flex;
    gap: 42px;
    min-height: min-content;

    @include media-tablet {
      gap: 20px;
    }
  }
}

.nav {
  &__item {
    width: max-content;
  }

  &__paragraph {
    @include media-tablet {
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
