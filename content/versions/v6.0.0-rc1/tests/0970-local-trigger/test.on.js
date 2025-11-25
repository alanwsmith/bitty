export class AlfaClass {
  runTest0970(event, el) {
    el.innerHTML = "FAILED";
  }
}

export class BravoClass {
  bittyReady() {
    this.api.localTrigger("runTest0970");
  }

  runTest0970(event, el) {
    el.innerHTML = "PASSED";
  }
}

export class CharlieClass {
  runTest0970(event, el) {
    el.innerHTML = "FAILED";
  }
}
