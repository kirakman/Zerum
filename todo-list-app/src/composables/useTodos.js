import { ref } from 'vue'

export function useTodos() {
  const tasks = ref([])

  const loadTasks = () => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      tasks.value = JSON.parse(savedTasks)
    }
  }

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
  }

  const addNewTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false
    }
    tasks.value.push(newTask)
    saveTasks()
  }

  const removeTaskById = (id) => {
    tasks.value = tasks.value.filter(task => task.id !== id)
    saveTasks()
  }

  const toggleTaskStatus = (id) => {
    const task = tasks.value.find(t => t.id === id)
    if (task) {
      task.completed = !task.completed
      saveTasks()
    }
  }

  return {
    tasks,
    loadTasks,
    addNewTask,
    removeTaskById,
    toggleTaskStatus
  }
}