export function useApi() {
    const fetchRandomTask = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const tasks = await response.json()
        
        const incompleteTasks = tasks.filter(task => !task.completed)
        
        const randomIndex = Math.floor(Math.random() * incompleteTasks.length)
        return incompleteTasks[randomIndex]
      } catch (error) {
        console.error('Erro ao buscar sugestão:', error)
        return null
      }
    }
  
    return {
      fetchRandomTask
    }
  }