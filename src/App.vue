<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />

    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background: rgb(125, 227, 252);
  background: linear-gradient(
    156deg,
    rgba(125, 227, 252, 1) 0%,
    rgba(24, 108, 232, 1) 100%
  );
  height: 100%;
  width: 100%;
}

body {
  font-family: 'Lato', sans-serif;
  color: rgb(15, 43, 75);
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 40px;
  background: rgb(240, 247, 255);
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 1px 21px 33px -11px rgba(0, 22, 41, 0.29);
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
