function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(200); // pad time for test
    const btn = this.api.querySelector("button");
    btn.click();
  }

  runTest0215Echo(event, element) {
    element.innerHTML = "PASSED";
  }
}

export class ChildAlfa {
  runTest0215Alfa(event, element) {
    element.innerHTML = "PASSED";
  }
}

export class ChildBravo {
  runTest0215Bravo(event, element) {
    element.innerHTML = "PASSED";
  }
}

export class ChildCharlie {
  runTest0215Charlie(event, element) {
    element.innerHTML = "PASSED";
  }
}

export class ChildDelta {
  runTest0215Delta(event, element) {
    element.innerHTML = "PASSED";
  }
}
