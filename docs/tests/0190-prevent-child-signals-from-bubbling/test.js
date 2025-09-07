export class Parent {
  runTest(el, _event) {
    el.innerHMTL = "FAILED";
  }
}

export class Child {
  init() {
    this.api.querySelector("button").click();
  }
  runTest(el, _event) {
    el.innerHTML = "PASSED";
  }
}
