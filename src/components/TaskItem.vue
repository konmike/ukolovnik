<template>
  <li class="tasks-list__item">
    <button class="button button--checkbox" @click="$emit('remove')">
      <i class="fas fa-check"></i>
    </button>
    <span v-if="!task.edit" @click="$emit('editTask')" class="content">
      {{ task.title }}
    </span>
    <input
      v-else
      class="content-edit"
      type="text"
      v-model="task.title"
      @blur="$emit('doneEdit')"
      @keyup.enter="$emit('doneEdit')"
      @keyup.esc="$emit('cancelEdit')"
      v-focus
    />
  </li>
</template>

<script>
export default {
  name: "TaskItem",
  props: ["task"],

  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      },
    },
  },
};
</script>
