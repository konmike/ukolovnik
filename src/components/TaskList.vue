<template>
  <transition name="switch" mode="out-in">
    <transition-group
      name="list"
      mode="out-in"
      tag="ul"
      class="tasks-list"
      v-if="this.tasks.length > 0"
      key="list"
    >
      <task-item
        v-for="(task, index) in this.tasks"
        :task="task"
        :key="task.id"
        @remove="removeTask(index)"
        @editTask="editTask(task)"
        @doneEdit="doneEdit(task)"
        @cancelEdit="cancelEdit(task)"
        :class="{ deleteHover: deleteHover }"
      ></task-item>
    </transition-group>

    <span class="all-done" v-else key="list-empty">
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
  props: ["tasks", "deleteHover"],

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
/* list transitions */
.list-enter-active,
.list-leave-active {
  transition: all 150ms;
}
.list-enter {
  opacity: 0;
  transform: translateY(20px);
}

.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

/* switch transitions */
.switch-enter,
.switch-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.switch-enter-active,
.switch-leave-active {
  transition: all 200ms;
}
</style>
