<script>
import FirstScreen from "@/views/FirstScreen.vue";
import WhoCanGetCredit from "@/views/WhoCanGetCredit.vue";
import CreditCanGet from "@/views/CreditCanGet.vue";
import CreditRequirements from "@/views/CreditRequirements.vue";
import CreditStages from "@/views/CreditStages.vue";

export default {
  components: {
    FirstScreen,
    WhoCanGetCredit,
    CreditCanGet,
    CreditRequirements,
    CreditStages,
  },
};
</script>

<template>
  <header>header</header>
  <main>
    <FirstScreen />
    <WhoCanGetCredit />
    <CreditCanGet />
    <CreditRequirements />
    <CreditStages />
  </main>
  <footer>footer</footer>
</template>

<style lang="scss" scoped></style>
