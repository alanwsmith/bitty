export class Parent {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(_event, el) {
    el.innerHTML = "PASSED";
  }
}
export class Child {
  runTest(_event, el) {
    el.innerHTML = "PASSED";
  }
}
