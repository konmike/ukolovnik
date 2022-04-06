<template>
  <transition-group
    name="fade"
    mode="out-in"
    tag="ul"
    class="tasks-list"
    v-if="this.tasks.length > 0"
  >
    <task-item
      v-for="(task, index) in this.tasks"
      :task="task"
      :key="task.id"
      @remove="removeTask(index)"
      @editTask="editTask(task)"
      @doneEdit="doneEdit(task)"
      @cancelEdit="cancelEdit(task)"
    ></task-item>
  </transition-group>

  <transition name="fade" mode="out-in" v-else>
    <span class="all-done">
      <i class="fas fa-clipboard-check"></i> Všechny úkoly dokončeny!
    </span>
  </transition>
</template>

<script>
import TaskItem from "./TaskItem.vue";
export default {
  name: "TaskList",
  components: {
    TaskItem,
  },
  props: ["tasks"],

  data() {
    return {
      beforeEditCache: "",
    };
  },

  methods: {
    removeTask(index) {
      this.tasks.splice(index, 1);
      localStorage.setItem("tasks-mk", JSON.stringify(this.tasks));
    },
    editTask(task) {
      this.beforeEditCache = task.title;
      task.edit = true;
    },
    doneEdit(task) {
      if (task.title.trim() == "") {
        task.title = this.beforeEditCache;
      }
      task.edit = false;
      localStorage.setItem("tasks-mk", JSON.stringify(this.tasks));
    },
    cancelEdit(task) {
      task.title = this.beforeEditCache;
      task.editing = false;
    },
  },
};
</script>

<style scoped lang="scss">
.fade-enter-active {
  transition: opacity 300ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
