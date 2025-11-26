export class AlfaClass {
  runTest0980(event, el) {
    this.api.localTrigger("runTest0980AlfaBounce");
  }
  runTest0980AlfaBounce(event, el) {
    el.innerHTML = "FAILED";
  }
}

export class BravoClass {
  bittyReady() {
    this.api.localTrigger("runTest0980");
  }
  runTest0980(event, el) {
    this.api.localTrigger("runTest0980BravoBounce");
  }
  runTest0980BravoBounce(event, el) {
    el.innerHTML = "PASSED";
  }
}

export class CharlieClass {
  runTest0980(event, el) {
    this.api.localTrigger("runTest0980CharlieBounce");
  }
  runTest0980CharlieBounce(event, el) {
    el.innerHTML = "FAILED";
  }
}