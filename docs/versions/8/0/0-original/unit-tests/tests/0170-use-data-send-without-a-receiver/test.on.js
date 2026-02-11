export default class {
  bittyReady() {
    const button = this.api.querySelector(".button0170");
    button.click();
    button.hidden = true;
  }

  runTest0170(_, __) {
    const div = this.api.querySelector(".target0170");
    div.innerHTML = "PASSED";
  }
}