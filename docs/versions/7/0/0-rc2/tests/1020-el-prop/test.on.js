export default class {
  bittyReady() {
    this.api.localTrigger("runTest1020Alfa runTest1020Bravo");
    this.api.trigger("runTest1020Charlie runTest1020Delta runTest1020Echo");
  }

  runTest1020Alfa(_event, el) {
    if (el.prop("key") === "alfa") {
      el.innerHTML = "PASSED";
    }
  }

  runTest1020Bravo(_event, el) {
    if (el.prop("key") === "bravo") {
      el.innerHTML = "PASSED";
    }
  }

  runTest1020Charlie(_event, el) {
    if (el.prop("key") === "charlie") {
      el.innerHTML = "PASSED";
    }
  }

  runTest1020Delta(_event, el) {
    if (el.prop("key") === "delta") {
      el.innerHTML = "PASSED";
    }
  }

  runTest1020Echo(_event, el) {
    if (el.prop("key") === "") {
      el.innerHTML = "PASSED";
    }
  }
}