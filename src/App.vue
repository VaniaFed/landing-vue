<script>
import BaseHeader from "@/components/BaseHeader.vue";
import BaseFooter from "@/components/BaseFooter.vue";
import FirstScreen from "@/views/FirstScreen.vue";
import InvestCredits from "@/views/InvestCredits/InvestCredits.vue";
// import WhoCanGetCredit from "@/views/WhoCanGetCredit.vue";
import CreditCanGet from "@/views/CreditCanGet.vue";
// import CreditRequirements from "@/views/CreditRequirements.vue";
// import CreditStages from "@/views/CreditStages.vue";
// import HowToGetCredit from "@/views/HowToGetCredit.vue";
// import AnyQuestions from "@/views/AnyQuestions.vue";

export default {
  components: {
    BaseHeader,
    FirstScreen,
    InvestCredits,
    // WhoCanGetCredit,
    CreditCanGet,
    // CreditRequirements,
    // CreditStages,
    // HowToGetCredit,
    // AnyQuestions,
    BaseFooter,
  },
};
</script>

<template>
  <BaseHeader />
  <main>
    <FirstScreen />
    <InvestCredits />
    <CreditCanGet />
    <!-- 
    <WhoCanGetCredit />
    <CreditRequirements />
    <CreditStages />
    <HowToGetCredit />
    <AnyQuestions /> -->
  </main>
  <BaseFooter />
</template>

<style lang="scss">
:root {
  font: 16px "TT Firs Neue";
}
</style>

<style src="the-new-css-reset/css/reset.css"></style>
