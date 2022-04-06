<template>
  <main class="container">
    <task-header />
    <task-form @updateData="updateData()" />
    <task-list :tasks="tasks" @updateData="updateData()" />
    <task-footer
      :remaining="remaining"
      @updateData="updateData()"
      v-if="remaining > 0"
    />
  </main>
</template>

<script>
import TaskHeader from "./TaskHeader.vue";
import TaskForm from "./TaskForm.vue";
import TaskList from "./TaskList.vue";
import TaskFooter from "./TaskFooter.vue";
export default {
  components: { TaskHeader, TaskForm, TaskList, TaskFooter },
  name: "Container",
  data() {
    return {
      tasks: [],
    };
  },
  computed: {
    remaining() {
      return this.tasks.length;
    },
  },
  methods: {
    updateData() {
      this.tasks =
        localStorage.getItem("tasks-mk") === null
          ? []
          : JSON.parse(localStorage.getItem("tasks-mk"));
    },
  },
  created() {
    this.updateData();
  },
};
</script>
