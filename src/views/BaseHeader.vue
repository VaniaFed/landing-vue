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
      <div class="header__category">Инвестиции</div>
      <nav>
        <li>
          <a href="#"></a>
        </li>
      </nav>
      <IconSearch class="header__search-icon" />
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

    @include media-mobile-large {
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

    @include media-mobile-large {
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

    @include media-mobile-large {
      flex-grow: 0;
      gap: 0px;
      margin-right: -14px;
    }
  }

  &__tabs,
  &__cluster {
    @include media-mobile-large {
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
  }

  &__burger {
    &-icon {
      width: 18px;
    }

    &-button {
      display: none;

      @include media-mobile-large {
        display: flex;
      }
    }
  }

  &__bottom {
    @include media-mobile-large {
      display: none;
    }
  }
}
</style>
