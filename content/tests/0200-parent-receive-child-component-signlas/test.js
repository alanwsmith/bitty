function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Parent {
  async bittyInit() {
    await sleep(400);
    console.log("llllllllllllllllll");
    this.api.querySelector("button").click();
  }

  runTest0200(event, element) {
    console.log("tmp-0200-check");
    element.innerHTML = "PASSED";
  }
}

export class Child {
  // must exist, but no methods required
}
