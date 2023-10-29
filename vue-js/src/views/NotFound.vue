<template>
  <link href="https://fonts.googleapis.com/css?family=Handjet&display=swap" rel="stylesheet">
    <div class="text-center">
      <v-icon color="error" icon="mdi-alert" size="x-large"></v-icon>
      <h1 class="try">404 - Not Found</h1>
      <h2 class="try">It seems you are lost. Try going to <a href="/">Home</a></h2>
    </div>
  </template>
    
    <script>
    export default {
      name: 'NotFound',
    };
    </script>
    
    <style>
    div {
      text-align: left; /* Center align the content */
      font-family: 'Arial', sans-serif; /* Use a common font */
    }
  
    .try {
      color: rgb(0, 0, 0);
      font-family: 'Handjet', sans-serif;
      font-weight: 200;
      font-size: 100px;
      text-decoration: none;
    }
    
    p {
      color: rgb(0, 0, 0); /* Customize the color as needed */
    }
    template {
      background-color: rgb(36, 35, 35);
    }
    a {
      color: #2196f3; /* Use a primary link color */
    }
    a:hover {
      color: #1976d2; /* Darker color on hover */
    }
    </style>