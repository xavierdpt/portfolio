<template>
  <div class="hello">
    <h1 :class="{active:msg.length>10}" :title="msg">{{ msg }}</h1>
    <h2 v-once>{{ msg }}</h2>
    <h3 v-html="msg"></h3>
    <p v-if="seen" :class="[msg.length>5?'active':'']">Youpi</p>
    <ul @click="mutate">
      <li v-for="todo in todos" v-bind:key="todo">{{todo}}</li>
    </ul>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo">{{todo}} : {{index}}</li>
    </ul>
    <ul>
      <li v-for="(todo, index) of todos" :key="todo">{{todo}} : {{index}}</li>
    </ul>
    <ul>
      <li v-for="(todo, key) of {'a':'b','c':'d'}" :key="todo">{{todo}} : {{key}}</li>
    </ul>
    <ul>
      <li v-for="(todo, key, index) of {'a':'b','c':'d'}" :key="todo">{{todo}} : {{key}} : {{index}}</li>
    </ul>
    <ul>
      <li v-for="n in 10" :key="n">{{n}}</li>
    </ul>
    <ul>
      <li is="tatadam" v-for="n in 4" :key="n" :target="n"></li>
    </ul>
    <button v-on:click="youpi">Youpi</button>
    <input :class="[{active:msg.length>2}]" v-model="msg"/>
    <ul>
      <li is="tatadam" class="'active'" v-bind:target="msg"></li>
    </ul>
    <a href="about:blank" @click.prevent="handleHrefClick">Blop</a>
    <button @click="dup">Dup</button>
    <button @click="mod">Mod</button>
    <button @click="cut">Cut</button>
    <button @click="objf">Obj</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      seen: true,
      todos: [1, 2],
      obj: {}
    }
  },
  methods: {
    youpi: function () {
      alert('youpi!')
    },
    handleHrefClick: function () {
      alert('zloup')
    },
    mutate: function () {
      this.todos.push(this.todos.length + 1)
    },
    dup: function () {
      this.todos = this.todos.concat(this.todos)
    },
    mod: function () {
      this.$set(this.todos, 0, this.todos.length * 100)
    },
    cut: function () {
      this.todos.splice(1)
    },
    objf: function () {
      this.$set(this.obj, 'a', 'b')
    },
    bloblom: function () {
      this.obj = Object.assign({}, this.obj, {titi: 'toto'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.active {
  background:yellowgreen
}
</style>
