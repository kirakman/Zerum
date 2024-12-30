<template>
    <div 
      class="flex items-center gap-2 p-3 border rounded-lg"
      :class="{ 'bg-green-50': task.completed }"
    >
      <input
        type="checkbox"
        :checked="task.completed"
        @change="$emit('toggle', task.id)"
        class="w-5 h-5"
      >
      <span 
        class="flex-1"
        :class="{ 'line-through text-gray-500': task.completed }"
      >
        {{ task.title }}
      </span>
      <button
        @click="$emit('remove', task.id)"
        class="text-red-500 hover:bg-red-50 p-2 rounded-lg"
      >
        <span class="material-icons">delete</span>
      </button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    task: {
      type: Object,
      required: true
    }
  })
  
  defineEmits(['toggle', 'remove'])
  </script>