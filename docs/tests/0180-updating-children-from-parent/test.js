function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Parent {
  async bittyInit() {
    await sleep(100) // time pad for test
    this.api.querySelector("button").click();
  }
  runTest(event, el) {
    el.innerHTML = `PASSED`;
  }
}

export class Child {
  // Child class must exist but update comes
  // via cascade from the Parent
}
