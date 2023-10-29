<template>
    <div class="modal" v-if="show" tabindex="-1" role="dialog" style="display: block;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5"><slot name="modal-title"></slot></h1>
            <button type="button" class="btn-close" @click="closeModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['show'],
    methods: {
      closeModal() {
        this.$emit('close');
      },
    },
  };
  </script>
  