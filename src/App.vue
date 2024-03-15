<script>
import BaseHeader from "@/views/BaseHeader.vue";
import FirstScreen from "@/views/FirstScreen.vue";
import InvestCredits from "@/views/InvestCredits/InvestCredits.vue";
import WhoCanGetCredit from "@/views/WhoCanGetCredit.vue";
import CreditCanGet from "@/views/CreditCanGet.vue";
import CreditRequirements from "@/views/CreditRequirements.vue";
import CreditStages from "@/views/CreditStages.vue";
import HowToGetCredit from "@/views/HowToGetCredit.vue";
import AnyQuestions from "@/views/AnyQuestions.vue";
import BaseFooter from "@/views/BaseFooter.vue";

export default {
  components: {
    BaseHeader,
    FirstScreen,
    InvestCredits,
    WhoCanGetCredit,
    CreditCanGet,
    CreditRequirements,
    CreditStages,
    HowToGetCredit,
    AnyQuestions,
    BaseFooter,
  },
};
</script>

<template>
  <BaseHeader />
  <main>
    <FirstScreen />
    <InvestCredits />
    <WhoCanGetCredit />
    <CreditCanGet />
    <CreditRequirements />
    <CreditStages />
    <HowToGetCredit />
    <AnyQuestions />
  </main>
  <BaseFooter />
</template>

<style lang="scss" scoped></style>

<style src="the-new-css-reset/css/reset.css"></style>
