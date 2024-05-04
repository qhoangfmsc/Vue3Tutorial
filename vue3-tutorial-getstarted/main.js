const app = Vue.createApp({
  // #2
  // template: `
  // <h1
  //   >Hello I'm {{ !isHidden ? firstName + lastName : "" }}, I'm now
  //   {{age}} yo
  // </h1>
  // <button v-on:click="initHideName">Hide name</button>
  // <button @click="initShowName">Show name</button>
  // <button @click="initShowModal">Toggle modal</button>
  // <div v-if="isActiveModal"> Modal </div>
  // `,
  data() {
    return {
      // #2
      // firstName: "Nguyen",
      // lastName: "Hoang",
      // age: 23,
      // isHidden: false,
      // isActiveModal: false,
      // #3
      // #3.1
      // x: 0,
      // y: 0,
      // #3.2
      classTest: "test",
      filterValue: 50,
      boxes: [
        {
          name: "Box 1",
          thumbnail: "https://i.stack.imgur.com/cdCSj.jpg",
          isPicked: false,
          size: 10,
        },
        {
          name: "Box 2",
          thumbnail: "https://i.stack.imgur.com/cdCSj.jpg",
          isPicked: true,
          size: 20,
        },
        {
          name: "Box 3",
          thumbnail: "https://i.stack.imgur.com/cdCSj.jpg",
          isPicked: false,
          size: 30,
        },
        {
          name: "Box 4",
          thumbnail: "https://i.stack.imgur.com/cdCSj.jpg",
          isPicked: false,
          size: 40,
        },
      ],
    };
  },
  methods: {
    // #2
    // initHideName() {
    //   this.isHidden = true;
    // },
    // initShowName() {
    //   this.isHidden = false;
    // },
    // initShowModal() {
    //   this.isActiveModal = !this.isActiveModal;
    // },
    // #3
    // #3.1
    // onMouseOver(event) {
    //   console.log("onMouseEvent", event);
    // },
    // onMouseLeave(event) {
    //   console.log("onMouseLeave", event);
    // },
    // onDoubleClick(event, newX, newY) {
    //   console.log("onDoubleClick", event);
    //   this.x = newX;
    //   this.y = newY;
    // },
    // onMouseMove(event) {
    //   console.log("onMouseMove", event);
    //   this.x = event.offsetX;
    //   this.y = event.offsetY;
    // },
    // #3.2
    initBoxClick(event, box) {
      box.isPicked = !box.isPicked;
    },
    initOnchangeInput(event) {
      this.filterValue = event.target.value;
    },
  },
  computed: {
    filteredBoxes() {
      return this.boxes.filter((box) => box.size <= this.filterValue);
    },
  },
});

app.mount("#app");
