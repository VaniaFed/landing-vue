<script>
import Button from "@/components/Button.vue";
import Container from "@/components/Container.vue";
import Heading from "@/components/Heading.vue";

export default {
  components: { Button, Container, Heading },
};
</script>

<template>
  <Container :class="[$style.container]">
    hi my name is Button

    <Button>Подать заявку</Button>
    <Button variant="primary">Получить консультацию</Button>

    <Heading variant="great">H1</Heading>
    <Heading>H1</Heading>
    <Heading size="h2" variant="medium_32">H2</Heading>
    <Heading size="h2" variant="medium_24">H2</Heading>
  </Container>
</template>

<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.container * {
  width: fit-content;
}
</style>
