function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export class AlfaClass {
  runTest0980(event, el) {
    this.api.localTrigger("runTest0980AlfaBounce");
  }
  runTest0980AlfaBounce(event, el) {
    el.innerHTML = "FAILED";
  }
}

export class BravoClass {
  async bittyReady() {  
    await sleep(300);
    this.api.querySelector(".clickme0980").click();
  }

  testTrigger0980() {
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