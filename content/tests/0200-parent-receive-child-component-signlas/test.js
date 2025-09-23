function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Parent {
  async bittyInit() {
    await sleep(400);
    this.api.querySelector("button").click();
  }

  runTest0200(event, element) {
    element.innerHTML = "PASSED";
  }
}

export class Child {
  // must exist, but no methods required
}
