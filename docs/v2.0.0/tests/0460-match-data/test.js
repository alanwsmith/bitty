export default class {
  runTest0460a(event, el) {
    if (this.api.match(event, el, "alfa") === true) {
      el.innerHTML = "PASSED";
    }
  }
  runTest0460b(event, el) {
    if (this.api.match(event, el, "alfa") === false) {
      el.innerHTML = "PASSED";
    }
  }
  runTest0460c(event, el) {
    if (this.api.match(event, el, "alfa") === false) {
      el.innerHTML = "PASSED";
    }
  }
  runTest0460d(event, el) {
    if (this.api.match(event, el, "noMatchingKey") === false) {
      el.innerHTML = "PASSED";
    }
  }
  runTest0460e(event, el) {
    if (this.api.match(event, el, "bravo") === false) {
      el.innerHTML = "PASSED";
    }
  }
}