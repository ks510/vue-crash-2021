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
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    AddTask,
    Footer,
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
    async addTask(task) {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      const data = await response.json();

      this.tasks = [...this.tasks, task];
    },
    async deleteTask(id) {
      if (confirm('Are you sure?')) {
        const response = await fetch(`/api/tasks/${id}`, {
          method: 'DELETE',
        });
        response.status === 200
          ? (this.tasks = this.tasks.filter((task) => task.id !== id))
          : alert('Error deleting task');
      }
    },
    async toggleReminder(id) {
      // fetch task to update and make changes to object
      const taskToToggle = await this.fetchTask(id);
      const updateTask = {
        ...taskToToggle,
        reminder: !taskToToggle.reminder,
      };

      // send request to update task
      const response = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateTask),
      });

      // syncing UI with data from request after updating task
      const data = await response.json();

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      );
    },
    async fetchTasks() {
      const response = await fetch('api/tasks');

      const data = await response.json();

      return data;
    },
    async fetchTask(id) {
      const response = await fetch(`api/tasks/${id}`);

      const data = await response.json();

      return data;
    },
  },
  async created() {
    this.tasks = await this.fetchTasks();
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
