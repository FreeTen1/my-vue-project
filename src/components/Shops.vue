<template>
  <div class="cards">
    <h1>{{name}}</h1>
    <div v-for="(phone, key) in phones" :key="key" class="card">
      <h3>{{ phone.title }}</h3>
      <div class="edit-prise">
        <button class="btn" v-on:click="countMinus(phone)">-</button>
        <input type="number" min="0" class="input" v-model="phone.count" readonly>
        <button class="btn" v-on:click="countPlus(phone)">+</button>
      </div>
      <div class="price">{{ itemPrice(phone) }}</div>
    </div>
    <div><h2>Сумма = {{totalPrice}} $</h2></div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  props: {
    name: String
  },
  data () {
    return {
      phones: [
        {
          title: 'iphone X',
          price: 1000,
          count: 0
        },
        {
          title: 'iphone Xr',
          price: 1100,
          count: 0
        },
        {
          title: 'Samsung galaxy Fold',
          price: 1500,
          count: 0
        }
      ]
    }
  },
  computed: {
    totalPrice(){
      let sum = 0
      this.phones.forEach(item => {
        sum += item.count * item.price
      })
      return sum
    }
  },
  methods: {
    itemPrice (phone) {
      return phone.count !== 0 ? phone.price * phone.count + '$' : 'На складе пусто'
    },
    countPlus (phone) {
      phone.count++
    },
    countMinus (phone) {
      if (phone.count - 1 >= 0)
        phone.count--
    }
  }
}
</script>

<style scoped>
.cards {
  display: flex;
  flex-direction: column;
}

.card {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 500px;
  margin: 5px;
  border: solid black 1px;
  border-radius: 10px;
}
.price {
  min-width: 122px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.input{
  cursor: default;
  user-focus: none;
  text-align: center;
  width: 50px;
}
.input:focus {
  outline: none;
}

.edit-prise {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  cursor: pointer;
}

</style>