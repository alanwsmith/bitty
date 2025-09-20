export class Parent {
  runTest(_event, el) {
    el.innerHMTL = "FAILED";
  }
}

export class Child {
  bittyInit() {
    this.api.querySelector("button").click();
  }
}
