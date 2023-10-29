<template>
    <title>Create New Task</title>
    <div class="edit-task">
      <h2>Create Task</h2>
      <div class="form-group">
        <label for="name">Name:</label>
        <input v-model="name" id="name" class="form-control" />
      </div>

      <div class="form-group">
        <label for="category">Category:</label>
        <select v-model="category" id="category" class="form-select">
            <option value="">Select Category</option>
            <option v-for="category in categoryOption" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="date">Deadline:</label>
        <input v-model="date" id="date" class="form-control" type="date" />
      </div>

      <label>Priority:</label>
      <select class="form-select" aria-label="Default select example" v-model="priority">
        <option value="">Select Priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button class="btn btn-secondary" style="margin-top: 10px;" @click="createTask">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>
      </button>
    </div>
  </template>
  
  <script>
  
  export default {
    data() {
      return {
        name: "Task Name",
        date: "",
        priority: "",
        category: "",
        categoryOption: [],
      };
    },
    methods: {
      async createTask() {
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
            if (data) {
            window.alert('Task has been created successfully');
            this.$router.push({ path: '/list' });
            }
        } catch (err) {
        console.log(err)
        }
      },
      async getCategories() {
        await fetch('http://localhost:3000/api/category')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.docs);
            this.categoryOption = data.docs;
        })
        .catch((error) => {
            console.error(error)
        })
      }
    },
    mounted() {
        this.getCategories()
      document.title = "Create Task"; 
    }
  };
  </script>
  
  <style scoped>
  .edit-task {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f8f8f8;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
  
  .btn {
    padding: 10px 20px;
  }
  
  /* Style the select element */
  select.form-select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
  }
  
  /* Style the button with Bootstrap classes */
  .btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  /* Hover effect for the button */
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>