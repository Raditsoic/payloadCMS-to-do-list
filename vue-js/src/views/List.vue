<template>
    <div class="d-flex justify-content-lg-end" style="margin-top: 20px; margin-right: 20px;">
      <router-link to="/createTask">
        <button class="btn btn-secondary">Add Task</button>
      </router-link>
    </div>
  
  <div class="d-flex text-center align-items-center justify-content-center m-4">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Activity</th>
          <th scope="col">Deadline</th>
          <th scope="col">Category</th>
          <th scope="col">Priority</th>
          <th scope="col">Status</th>
          <th scope="col">Delete</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.name }}</td>
          <td>{{ task.deadline }}</td>
          <td>{{ task.category.name }}</td>
          <td>{{ task.priority }}</td>
          <td>{{ task.status }}</td>
          <td>
            <button class="btn" :class="{ 'btn-dark': task.status }" @click="deleteTask(task.id)">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-journal-x" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
              </svg>
            </button></td>
          <td>
            <router-link :to="{ name: 'task', params: { id: task.id } }">
              <button class="btn" :class="{ 'btn-dark': task.status }">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>
  
<script>
import Modal from "../components/Modal.vue";
import createTask from "../components/createTodo.vue";
import qs from "qs";

export default {
  components: {
    Modal,
    createTask,
  },
  data() {
    return {
      tasks: [], 
      addTaskModal: false,
    };
  },
  methods: {
    modal() {
      this.addTaskModal = !this.addTaskModal;
    },
    async fetchTasks() {
      await fetch('http://localhost:3000/api/task')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.docs);
        this.tasks = data.docs;
      })
      .catch((error) => {
        console.error(error)
      })
    },
    async deleteTask(taskID) {
      const stringifiedQuery = qs.stringify({
        where: {
          id: {
            contains: taskID,
          },
        },
      },{ addQueryPrefix: true });
      try {
        const req = await fetch(`http://localhost:3000/api/task/${stringifiedQuery}`, {
          method: "DELETE", 
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        })
        const data = await req.json()
        if (data) {
        window.alert('Task has been deleted successfully');
        window.location.reload();
      }
      } catch (err) {
        console.log(err)
      }
    }
  },
  computed: {
    checkStatus(taskStatus) {
      if (taskStatus == 'notCompleted') {
        return "Not Completed";
      } else if (taskStatus == "Completed") {
        return "Completed"
      }
    }
  },
  created() {
    this.fetchTasks();
  },
};
</script>