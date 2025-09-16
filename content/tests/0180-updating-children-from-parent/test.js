export class Parent {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  runTest(el, event) {
    el.innerHTML = `PASSED`;
  }
}

export class Child {
  // Child class must exist but update comes
  // via cascade from the Parent
}
