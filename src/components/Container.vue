<template>
  <main class="container">
    <task-header />
    <task-form @updateData="updateData()" />
    <task-list
      :deleteHover="deleteHover"
      :tasks="tasks"
      @updateData="updateData()"
    />
    <transition name="footer" mode="out-in">
      <task-footer
        v-if="remaining > 0"
        :remaining="remaining"
        @updateData="updateData()"
        @hoverDeleteAll="deleteHovering"
      />
    </transition>
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
      deleteHover: false,
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
    deleteHovering(e) {
      this.deleteHover = e;
      console.log(this.deleteHover);
    },
  },
  created() {
    this.updateData();
  },
};
</script>

<style lang="scss" scoped>
/* footer transitions */
.footer-enter,
.footer-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.footer-enter-active {
  transition: all 150ms 350ms;
}

.footer-leave-active {
  transition: all 200ms;
}
</style>
