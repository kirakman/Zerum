import { mount } from '@vue/test-utils'
import { describe, it, expect, beforeEach } from 'vitest'
import TodoList from '../components/TodoList.vue'

describe('TodoList', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('adiciona uma nova tarefa de forma correta', async () => {
    const wrapper = mount(TodoList)
    
    const input = wrapper.find('input[type="text"]')
    await input.setValue('Nova tarefa de teste')
    await wrapper.find('button').trigger('click')

    const taskElements = wrapper.findAll('.todo-list div')
    expect(taskElements.length).toBeGreaterThan(0)
    
    const savedTasks = JSON.parse(localStorage.getItem('tasks'))
    expect(savedTasks).toHaveLength(1)
    expect(savedTasks[0].title).toBe('Nova tarefa de teste')
  })
})