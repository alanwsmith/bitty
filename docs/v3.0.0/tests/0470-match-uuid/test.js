export default class {
  initTest0470(event, el) {
    el.click();
  }
  runTest0470a(event, el) {
    if (this.api.match(event, el) === true) {
      el.innerHTML = "PASSED";
    }
  }
  runTest0470b(event, el) {
    if (this.api.match(event, el) === false) {
      el.innerHTML = "PASSED";
    }
  }
}