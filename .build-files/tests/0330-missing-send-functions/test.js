export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest0330(_event, el) {
    if (
      [...this.api.missingFunctions()].map((note) => {
        return note.payload.signal;
      }).includes("FOR_TESTING_SignalWithoutMatchingFunction")
    ) {
      el.innerHTML = "PASSED";
    }
  }
}
