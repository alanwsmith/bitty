export class Parent {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(event, el) {
    el.innerHTML = "PASSED";
  }
}

export class Child {
  // no methods required
}
