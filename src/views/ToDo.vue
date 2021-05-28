<template>
  <div id="todo">
    <input type="text" v-model="todoText" placeholder="Ваша задача">
    <button @click="addTask" :disabled="!todoText">Добавить</button>
    <button @click="clear">Удалить всё</button>
    <div v-for="(item, index) in items">
      <p>
        {{ item }} - {{index}}
        <button @click="deleteEl(index)">Удалить</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",
  data(){
    return {
      todoText: '',
      items: []
    }
  },
  methods: {
    addTask() {
      this.items.push(this.todoText)
      this.todoText = ''
    },
    clear () {
      this.items = []
    },
    deleteEl (index) {
      this.items.splice(index, 1)
    }
  }
}
</script>
<style scoped>
  #todo {
    margin: 10px;
  }
</style>