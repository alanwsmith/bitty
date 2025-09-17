export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest(_el, event) {
    this.api.send("forward", event);
  }

  forward(el, event) {
    el.innerHTML = "PASSED";
  }
}
