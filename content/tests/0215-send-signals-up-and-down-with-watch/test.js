function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    const btn = this.api.querySelector("button");
    btn.click();
  }

  runTest0215Echo(_event, element) {
    element.innerHTML = "PASSED";
  }
}

export class ChildAlfa {
  runTest0215Alfa(_event, element) {
    element.innerHTML = "PASSED";
  }
}

export class ChildBravo {
  runTest0215Bravo(_event, element) {
    element.innerHTML = "PASSED";
  }
}

export class ChildCharlie {
  runTest0215Charlie(_event, element) {
    element.innerHTML = "PASSED";
  }
}

export class ChildDelta {
  runTest0215Delta(_event, element) {
    element.innerHTML = "PASSED";
  }
}
