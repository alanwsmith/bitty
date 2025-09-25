export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest0320(_event, el) {
    if (
      [...this.api.missingAttributes()].map((note) => {
        return note.payload.signal;
      }).includes("FOR_TESTING_ReceiveAttrWithoutSender")
    ) {
      el.innerHTML = "PASSED";
    }
  }
}
