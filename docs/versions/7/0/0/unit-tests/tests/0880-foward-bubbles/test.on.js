function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class AlfaWidget {
  async bittyReady() {
    await sleep(100);
    this.api.querySelector("button").click();
  }

  runTest0880(event, el) {
    this.api.forward(event, "update0880");
  }
}

export class BravoWidget {
  update0880(_event, el) {
    el.innerHTML = "PASSED";
  }
}