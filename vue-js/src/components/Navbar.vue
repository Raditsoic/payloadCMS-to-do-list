<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <img src="/favicon.ico" alt="Favicon" class="navbar-favicon">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav justify-content-center">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active" aria-current="page">Home</RouterLink>
        </li>
        <li class="nav-item dropdown">
          <RouterLink to="/list" class="nav-link">To do List</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
