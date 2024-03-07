<script>
import Button from "@/components/Button.vue";
import Container from "@/components/Container.vue";
import Heading from "@/components/Heading.vue";
import Paragraph from "@/components/Paragraph.vue";

export default {
  components: { Button, Container, Heading, Paragraph },
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

    <Paragraph size="16"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut
      magnam assumenda illum cumque enim voluptates tempora. Doloremque
      obcaecati optio velit, deleniti similique mollitia repellendus facere.
      Perferendis aliquid delectus eligendi?</Paragraph
    >
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
