<template lang="html">

  <section class="todo-list">
    <form @submit.prevent="submitTodo">
      <div class="add-items d-lg-flex">
        <input v-model="newTodo" type="text" class="form-control todo-list-input" placeholder="What do you need to do today?">
        <button class="add btn btn-gradient-primary font-weight-bold todo-list-add-btn ml-0 ml-lg-2 mt-2 mt-lg-0" id="add-task">Add</button>
      </div>
    </form>
    <div class="list-wrapper">
      <ul class="d-flex flex-column-reverse todo-list">
        <li v-for="todo in todos" :key="todo.id">
          <div class="form-check">
            <label class="form-check-label">
            <input class="checkbox" type="checkbox">{{todo.title}}<i class="input-helper"></i></label>
          </div>
          <i @click.prevent="deleteTodo(todo)" class="remove mdi mdi-close-circle-outline"></i>
        </li>
      </ul>
    </div>
  </section>

</template>

<script lang="js">
export default {
  name: 'todo-list',
  data () {
    return {
      todos: [
        {'title': 'Pick up kids from school', 'done': false},
        {'title': 'Prepare for presentation', 'done': false},
        {'title': 'Print Statements', 'done': false},
        {'title': 'Create invoice', 'done': false},
        {'title': 'Call John', 'done': false},
        {'title': 'Meeting with Alisa', 'done': false}
      ],
      newTodo: ''
    }
  },
  watch: {
    todos: {
      handler () {
        localStorage.setItem('todos', JSON.stringify(this.todos))
      },
      deep: true
    } 
  },
  mounted () {
    // console.log(localStorage.todos)
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos)
    }
  },
  methods: {
    submitTodo () {
      if (!this.newTodo == '') {
        this.todos.push({
        title: this.newTodo,
        done: false
      })
      this.newTodo = ''
      }
    },
    deleteTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.todo-list {
  .list-wrapper {
    max-height: 300px;
    overflow-y: auto;
  }
}
</style>
