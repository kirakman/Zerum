#Todo List App - Teste para vaga de front end jr
Protótipo FIGMA: https://www.figma.com/design/zE5Jobj5fILVsBsZvJInxc?node-id=0-1 

![image](https://github.com/user-attachments/assets/639ea6d7-a81c-4dd2-983c-bc2e446e8027)


Este é um projeto de uma aplicação web de lista de tarefas (Todo List) desenvolvido com Vue.js para a vaga de Dev front end jr. A aplicação permite gerenciar tarefas diárias de forma simples e intuitiva, com funcionalidades adicionais como sugestões automáticas de tarefas.

#Funcionalidades

-Gerenciamento de Tarefas: • Adicionar Tarefas: Digite sua tarefa e pressione Enter ou clique no botão "Adicionar" • Marcar como Concluída: Clique no checkbox ao lado da tarefa para marcá-la como concluída • Tarefas concluídas ficam com fundo verde e texto riscado para fácil visualização • Remover Tarefas: Clique no ícone de lixeira para remover uma tarefa • Sugestão de Tarefas: Clique no botão "Sugestão" para receber uma tarefa aleatória da API

#Recursos Técnicos: • Persistência de Dados: Todas as tarefas são salvas automaticamente no localStorage do navegador • API Integration: Integração com JSONPlaceholder para sugestões de tarefas •Interface Responsiva: Design adaptável para diferentes tamanhos de tela

#Testes Unitários: • Cobertura de testes para garantir o funcionamento das funcionalidades

#Como Executar o Projeto: •Pré-requisitos -Node.js (versão 14 ou superior) -npm (gerenciador de pacotes do Node)

Instalação -Descompacte o arquivo que está em .Zip -Abra-o no Vs Code -Navegue para "cd todo-list-app" -No terminal, digite "npm install" para instalar as dependências -Digite "npm run dev" para rodar o projeto (deve rodar no http://localhost:5174/) -Para rodar o teste, digite no terminal "npm run test"

#Tecnologias Utilizadas: •Vue.js 3: Framework JavaScript para construção da interface •Vite: Build tool e servidor de desenvolvimento •Tailwind CSS: Framework CSS para estilização •Vitest: Framework de testes •Material Icons: Biblioteca de ícones •JSONPlaceholder: API pública para sugestões de tarefas

#Funcionalidades Detalhadas

-Sistema de Armazenamento: •Todas as tarefas são automaticamente salvas no localStorage •Os dados persistem mesmo após fechar o navegador •Carregamento automático das tarefas ao abrir a aplicação

-Integração com API: •Consumo da API JSONPlaceholder para sugestões de tarefas •Filtragem inteligente para mostrar apenas tarefas não concluídas •Tratamento de erros para garantir boa experiência do usuário

-Interface do Usuário •Design clean e moderno usando Tailwind CSS •Feedback visual para ações do usuário •Animações suaves para melhor experiência •Ícones intuitivos do Material Icons

#Observações •A aplicação utiliza o localStorage para persistência, então os dados são mantidos apenas no navegador local •A API de sugestões tem um limite de requisições, então use com moderação •Os testes cobrem as principais funcionalidades, mas podem ser expandidos conforme necessário
