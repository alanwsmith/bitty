export class Parent {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(_event, el) {
    el.innerHTML = "PASSED_GOT_CHILD_SIGNAL";
  }
}
export class Child {
  // This class must exist for bitty to
  // be able to connect to, but no
  // functionality is needed
}
