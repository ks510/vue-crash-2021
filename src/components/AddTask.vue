<template>
  <div class="form-container">
    <form @submit="onSubmit" class="add-form">
      <div class="form-control">
        <label>Task</label>
        <input type="text" v-model="text" name="text" placeholder="Add Task" />
      </div>
      <div class="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          v-model="day"
          name="day"
          placeholder="Add Day & Time"
        />
      </div>
      <div class="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" v-model="reminder" name="reminder" />
      </div>

      <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      if (!this.text) {
        alert('Please add a task');
        return;
      }

      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.$emit('add-task', newTask);

      this.text = '';
      this.day = '';
      this.reminder = false;
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 20px 40px;
  border-radius: 15px;
  background: rgb(187, 224, 255);
}
.add-form {
  margin-bottom: 25px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 20px 15px;
  font-size: 16px;
  border-radius: 8px;
  border: 0;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
.btn {
  background-color: rgba(24, 108, 232, 1);
}
</style>
