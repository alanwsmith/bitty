export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest0310(_event, el) {
    if (
      [...this.api.missingAttrs()].map((note) => {
        return note.key;
      }).includes("FOR_TESTING_SendAttrWithoutReceiver")
    ) {
      el.innerHTML = "PASSED";
    }
  }
}
