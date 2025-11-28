export default class {
  runTest1250(ev, el) {
    if (el.matchSenderData("key")) {
      el.innerHTML = "PASSED";
    }
  }
}