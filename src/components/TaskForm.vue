<template>
  <form @submit.prevent="addTask" class="form">
    <input
      type="text"
      class="input input--task-new"
      v-model="newTask"
      @keyup.enter="addTask"
      placeholder="Přidat nový úkol"
    />

    <button type="submit" class="button button--submit">Přidat</button>
  </form>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "TaskForm",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        let updateTask =
          localStorage.getItem("tasks-mk") === null
            ? []
            : JSON.parse(localStorage.getItem("tasks-mk"));
        updateTask.push({
          id: nanoid(),
          title: this.newTask,
          edit: false,
        });
        localStorage.setItem("tasks-mk", JSON.stringify(updateTask));
        this.newTask = "";
        this.$emit("updateData");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
