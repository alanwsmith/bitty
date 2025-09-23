export class Parent {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest(_event, element) {
    // element.innerHTML = "PASSED";
  }
}

export class Child {
  // must exist, but no methods required
}
