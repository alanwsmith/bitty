export class Parent {
  runTest(_event, el) {
    el.innerHTML = "PASSED";
  }
}
export class Child {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(_event, el) {
    el.innerHTML = "PASSED";
  }
}
