<script>
import IconUser from "@/components/icons/IconUser.vue";
import BaseParagraph from "@/components/BaseParagraph.vue";
import IconButton from "@/components/IconButton.vue";

export default {
  props: {},
  components: { BaseParagraph, IconUser, IconButton },
};
</script>

<template>
  <a class="header-login" href="/sing-in">
    <BaseParagraph size="14" weight="500" class="header-login__label"
      >Авторизация
    </BaseParagraph>
    <IconButton class="header-login__button">
      <IconUser class="header-login__icon" />
    </IconButton>
  </a>
</template>

<style scoped lang="scss">
.header-login {
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

    @include media-mobile-large {
      padding: 12px;
    }
  }

  &__icon {
    display: block;
    width: 18px;
  }
}
</style>
