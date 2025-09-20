export class Parent {
  bittyInit() {
    this.api.querySelector("button").click();
  }
}
export class Child {
  runTest(event, el) {
    // console.log(el);
    // console.log(event);
    if (el) {
      el.innerHTML = "PASSED_GOT_CHILD_SIGNAL";
    }
  }
  // This class must exist for bitty to
  // be able to connect to, but no
  // functionality is needed
}
