<template>
  <header-app class="fade" ref="header" />
  <!-- <modal-app
    v-if="isShowModal"
    ref="modal"
    title="Modal header title"
    theme="brown"
    @cancel="onActive"
  /> -->
  <teleport to="body">
    <customed-modal-app
      v-if="isShowModal"
      ref="modal"
      title="Modal header title"
      theme="white"
      @cancel="onActive"
    >
      <template v-slot:header> HelloWorld Header </template>
      <template v-slot:footer>
        <!-- EVENT MODIFIERS -->
        <button @click.enter="onActive">OK</button>
      </template>
      <main>
        <label>Name</label>
        <input type="text" />
      </main>
    </customed-modal-app>
  </teleport>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld ref="hello" msg="Welcome to Your Vue.js App" />
  <button @click="onChange">Change me</button>
  <button @click.space="onActive">Active Modal</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
// import ModalComponent from "./components/ModalComponent.vue";
import CustomedModalComponent from "./components/CustomedModalComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeaderApp: HeaderComponent,
    // ModalApp: ModalComponent,
    CustomedModalApp: CustomedModalComponent,
  },
  data() {
    return {
      // TOGGLE BY USING CHILD COMPONENT ACCESS PARENT COMPONENT
      isShowModal: false,
    };
  },
  methods: {
    onChange() {
      console.log("Running...");

      // HELLO WORLD COMPONENT
      let helloComponent = this.$refs.hello;
      console.log(helloComponent);
      helloComponent.consoleLogTesting();

      // HEADER COMPONENT
      let headerComponent = this.$refs.header;
      console.log(headerComponent);
    },
    onActive() {
      // TOGGLE BY USING PARENT COMPONENT ACCESS CHILD COMPONENT
      // let modalComponent = this.$refs.modal;
      // modalComponent.toggleModal();

      // TOGGLE BY USING CHILD COMPONENT ACCESS PARENT COMPONENT
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<style></style>
