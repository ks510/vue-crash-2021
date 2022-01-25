<template>
  <div class="container">
    <Header
      @toggle-add-task="toggleAddTask"
      title="Task Tracker"
      :showAddTask="showAddTask"
    />
    <div v-show="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks
      @toggle-reminder="toggleReminder"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    deleteTask(id) {
      if (confirm('Are you sure?')) {
        this.tasks = this.tasks.filter((task) => task.id !== id);
      }
    },
    toggleReminder(id) {
      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      );
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctors Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'March 3rd at 1:30pm',
        reminder: false,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'April 2nd at 3pm',
        reminder: false,
      },
    ];
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
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 1px 21px 33px -11px rgba(0, 0, 0, 0.39);
  -webkit-box-shadow: 1px 21px 33px -11px rgba(0, 0, 0, 0.39);
  -moz-box-shadow: 1px 21px 33px -11px rgba(0, 0, 0, 0.39);
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
