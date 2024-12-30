<template>
  <div class="header bg-[#222222] flex items-center justify-center py-6">
    <img src="https://www.zerum.com/wp-content/uploads/2019/10/marca_verde_site_2018-1-e1570647253690-1.png" alt="logo-zerum" class="max-h-24">
  </div>
  <div class="container mx-auto p-4 max-w-2xl">
    <h1 class="text-2xl font-bold text-center mb-6">Lista de Tarefas</h1>
    <TodoList />
  </div>
</template>
<script setup>
import TodoList from './components/TodoList.vue';
</script>
