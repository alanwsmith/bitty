export default class {
  bittyReady() {
    this.api.querySelector("button").click();
  }

  bittyCatch(event) {
    this.api.trigger("runTest0640");
  }

  runTest0640(_event, el) {
    el.innerHTML = "PASSED";
  }

}