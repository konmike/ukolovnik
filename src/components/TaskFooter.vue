<template>
  <footer class="footer">
    <span class="tasks-counter">
      Zbývá úkolů: <span class="value">{{ remaining }}</span></span
    >

    <button class="button button--delete-all" @click="clearCompleted">
      Dokončit vše
    </button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: ["remaining"],
  methods: {
    clearCompleted() {
      localStorage.removeItem("tasks-mk");
      this.$emit("updateData");
    },
  },
};
</script>
