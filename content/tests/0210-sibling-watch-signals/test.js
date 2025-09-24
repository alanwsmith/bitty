function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Alfa {
  runTest0210(event, element) {
    element.innerHTML = "PASSED";
  }
}

export class Bravo {
  async bittyInit() {
    await sleep(100) // time pad for test
    const btn = this.api.querySelector("button");
    btn.click();
  }
}
