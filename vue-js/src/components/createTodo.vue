<template>
  <title>Create Task</title>
  <input type="text" class="form-control m-1" id="todoName" v-model="name" 
      placeholder="What do you need to do?">
  <input type="date" class="form-control m-1" id="todoTime" v-model="date"
      placeholder="When do you need to do it?">
  <select class="form-select m-1" aria-label="Default select example" v-model="priority">
    <option selected>Select Priority</option>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>
  
  <button @click="addTask" class="btn btn-secondary m-1">Add Task</button>
</template>

<script>
export default {
  emits: ["close-modal"],
  data() {
    return {
      tasks,
      name: "",
      date: "",
      priority: "Select Priority",
      category: "Select Category",
      status: "",
    };
  },
  methods: {
    async addTask() {
      if (this.taskName === "" || this.taskTime === "" || this.taskPriority === "") {
        return;
      }
      try {
        const req = await fetch('http://localhost:3000/api/task', {
          method: "POST", 
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            category: this.category,
            priority: this.priority,
            date: this.date,
            status: "notCompleted",
          }),
        })
        const data = await req.json()
      } catch (err) {
        console.log(err)
      }
        
      this.name = "";
      this.date = "";
      this.priority = "";
      this.category = "";
      this.status = "";
      this.$emit("close-modal");
    },
  },
  mounted() {
    document.title = "Create Task";
  }
};
</script>

<style>

</style>