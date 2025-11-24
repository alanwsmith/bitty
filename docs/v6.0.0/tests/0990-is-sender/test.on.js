export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest0990Alfa(_event, el) {
    el.classList.add("test");
    if (el.isSender) {
      el.innerHTML = "PASSED";
    }
  }
}