export class AlfaClass {
  runTest1060Alfa(_, el) {
    el.innerHTML = "FAILED";
  }
}

export class BravoClass {
  bittyReady() {
    this.api.click();
  }
  runTest1060Bravo(_, el) {
    el.innerHTML = "PASSED";
  }
}