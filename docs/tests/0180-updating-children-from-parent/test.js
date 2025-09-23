function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Parent {
  async bittyInit() {
    await sleep(100) // time pad for test
    this.api.querySelector("button").click();
  }
  runTest0180(_event, element) {
    element.innerHTML = `PASSED`;
  }
}

export class Child {
  // must exist, but no methods required
}
