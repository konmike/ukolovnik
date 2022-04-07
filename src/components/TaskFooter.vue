<template>
  <footer class="footer">
    <span class="tasks-counter"> {{ remaining }}</span>
    <button
      class="button button--delete-all"
      @mouseover="$emit('hoverDeleteAll', true)"
      @mouseleave="$emit('hoverDeleteAll', false)"
      @click="clearCompleted"
    >
      Dokončit vše <i class="fas fa-check"></i>
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
      this.$emit("hoverDeleteAll", false);
    },
  },
};
</script>
