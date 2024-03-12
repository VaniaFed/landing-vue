<script>
import BaseHeader from "@/views/BaseHeader.vue";
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
    BaseHeader,
  },
};
</script>

<template>
  <BaseHeader />
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

<style src="the-new-css-reset/css/reset.css"></style>
