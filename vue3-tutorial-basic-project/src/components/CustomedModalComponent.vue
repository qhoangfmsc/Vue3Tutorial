<template>
  <!-- :class="{ show: state }" can also be used here -->
  <div
    class="modal fade show"
    id="exampleModalLive"
    tabindex="-1"
    aria-labelledby="exampleModalLiveLabel"
    aria-modal="true"
    role="dialog"
    @click.self="toggleModal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header" :style="{ background: theme }">
          <h5 class="modal-title" id="exampleModalLiveLabel">
            <slot name="header" />
          </h5>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: "Bạn có chắc chắn?",
    },
    theme: {
      type: String,
      default: "white",
      validator(value) {
        return ["black", "white"].includes(value);
      },
    },
  },
  data() {
    return {
      // TOGGLE BY USING PARENT COMPONENT ACCESS CHILD COMPONENT
      // state: false,
    };
  },
  methods: {
    toggleModal() {
      // TOGGLE BY USING PARENT COMPONENT ACCESS CHILD COMPONENT
      // this.state = !this.state;

      // TOGGLE BY USING CHILD COMPONENT ACCESS PARENT COMPONENT
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background: rgb(0 0 0 / 60%);
}
.modal.show {
  display: block;
}
.modal.show .modal-dialog {
  transform: none;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}
.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
.fade {
  transition: opacity 0.15s linear;
}
.modal.fade .modal-dialog {
  transition: transform 0.3s ease-out;
  transform: translate(0, -50px);
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 4.5rem auto;
  pointer-events: none;
  max-width: 500px;
}
.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-secondary {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
}
.btn-primary {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
</style>
