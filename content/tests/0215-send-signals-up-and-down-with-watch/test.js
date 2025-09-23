export default class {
  #counter = 0;

  bittyInit() {
    const btn = this.api.querySelector("button");
    btn.click();
    btn.click();
    btn.click();
    btn.click();
  }

  runTest(event, element) {
    this.#counter += 1;
    this.api.forward(event, "testResult");
  }

  testResult(_event, element) {
    if (this.#counter >= 4) {
      // element.innerHTML = "PASSED";
    } else {
      // element.innerHTML = "FAILED";
    }
  }
}

export class ChildAlfa {
  // no methods required, but must exist
}

export class ChildBravo {
  // no methods required, but must exist
}

export class ChildCharlie {
  // no methods required, but must exist
}

export class ChildDelta {
  // no methods required, but must exist
}
