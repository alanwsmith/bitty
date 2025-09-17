export class Parent {
  runTest(el, _event) {
    el.innerHMTL = "FAILED";
  }
}

export class Child {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(el, _event) {
    el.innerHTML = "PASSED";
  }
}
