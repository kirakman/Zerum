<template>
    <div class="todo-list bg-gray-100 p-6 rounded-lg shadow-md">
      <div class="flex gap-2 mb-6">
        <input
          v-model="newTask"
          type="text"
          placeholder="Digite uma nova tarefa..."
          class="flex-1 px-4 py-2 border rounded-lg"
          @keyup.enter="addTask"
        >
        <button
          @click="addTask"
          class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 flex items-center gap-2"
        >
          <span class="material-icons">add</span>
          Adicionar
        </button>
        <button
          @click="getSuggestion"
          class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
        >
          <span class="material-icons">auto_awesome</span>
          Sugestão
        </button>
      </div>
  
      <div class="space-y-2">
        <TodoItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @toggle="toggleTask"
          @remove="removeTask"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import TodoItem from './TodoItem.vue'
  import { useTodos } from '../composables/useTodos'
  import { useApi } from '../composables/useApi'
  
  const { 
    tasks, 
    addNewTask, 
    removeTaskById, 
    toggleTaskStatus, 
    loadTasks 
  } = useTodos()
  
  const { fetchRandomTask } = useApi()
  const newTask = ref('')
  
  onMounted(() => {
    loadTasks()
  })
  
  const addTask = () => {
    if (newTask.value.trim()) {
      addNewTask(newTask.value)
      newTask.value = ''
    }
  }
  
  const removeTask = (id) => {
    removeTaskById(id)
  }
  
  const toggleTask = (id) => {
    toggleTaskStatus(id)
  }
  
  const getSuggestion = async () => {
    const suggestion = await fetchRandomTask()
    if (suggestion) {
      addNewTask(suggestion.title)
    }
  }
  </script>
  