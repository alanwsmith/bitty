export default class {
  bittyInit() {
    this.api.trigger("runTest0280");
  }

  runTest0280(_event, element) {
    element.innerHTML = "PASSED";
  }
}
