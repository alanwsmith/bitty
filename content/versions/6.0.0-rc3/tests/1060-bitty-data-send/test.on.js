export class AlfaClass {
  runTest1060Alfa(_event, el) {
    el.innerHTML = "FAILED";
  }
}

export class BravoClass {
  bittyReady() {
    this.api.click();
  }
  runTest1060Bravo(_event, el) {
    el.innerHTML = "PASSED";
  }
}
