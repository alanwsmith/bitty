export default class {
  bittyReady() {
    this.api.localTrigger("runTest1030Alfa runTest1030Bravo");
    this.api.trigger("runTest1030Charlie runTest1030Delta");
  }

  runTest1030Alfa(_event, el) {
    if (el.dataInt("key") === 10) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1030Bravo(_event, el) {
    if (el.dataInt("key") === 20) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1030Charlie(_event, el) {
    if (el.dataInt("key") === 30) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1030Delta(_event, el) {
    if (el.dataInt("key") === 40) {
      el.innerHTML = "PASSED";
    }
  }
}