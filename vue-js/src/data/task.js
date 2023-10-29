import {
  reactive
} from "vue";

export const tasks = reactive({
  task: [{
      id: 0,
      name: "Play Genshin",
      time: "1998-10-8",
      priority: "Low Priority",
      status: false
    },
    {
      id: 1,
      name: "Play P5R",
      time: "2006-4-26",
      priority: "Medium Priority",
      status: true
    }
  ],

  addTask(newTask) {
    this.task.push(newTask);
  },
  deleteTask(taskId) {
    const taskIndex = this.task.findIndex((task) => task.id === taskId);
    if (taskIndex !== -1) {
      this.task.splice(taskIndex, 1);
    }
  },
  editTask(taskId) {
    const taskIndex = tasks.task.findIndex((task) => task.id === taskId.id);
    if (taskIndex !== -1) {
      tasks.task.splice(taskIndex, 1, taskId);
    } else {
      tasks.task.splice(taskIndex + 1, 1, taskId);
    }
  },
  clearDone() {
    this.task = this.task.filter((task) => !task.status);
  },
  clearAll() {
    this.task = [];
  },
  updateTaskStatus(id) {
    this.task[id].status = !this.task[id].status;
  }

});