<script>
export default {
  props: { text: Number, variant: String },
  methods: {
    log: () => {
      console.log("hi");
    },
  },
};
</script>

<template>
  <button @click="log()" class="'button button_' + variant">
    {{ text }}
  </button>
</template>

<style scoped>
.button {
  padding: 8px 21px;
}
</style>
