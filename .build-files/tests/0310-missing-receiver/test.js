export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest0310(_event, el) {
    if (
      [...this.api.missingAttributes()].map((note) => {
        return note.payload.signal;
      }).includes("FOR_TESTING_SendAttrWithoutReceiver")
    ) {
      el.innerHTML = "PASSED";
    }
  }
}
