<script>
import FirstScreen from "@/views/FirstScreen.vue";
import CreditCanGet from "@/views/CreditCanGet.vue";
import CreditRequirements from "@/views/CreditRequirements.vue";

export default {
  components: {
    FirstScreen,
    CreditCanGet,
    CreditRequirements,
  },
};
</script>

<template>
  <header>header</header>
  <main>
    <FirstScreen />
    <CreditCanGet />
    <CreditRequirements />
  </main>
  <footer>footer</footer>
</template>

<style lang="scss" scoped></style>
