export default class { 
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest0465(event, el) {
    if (this.api.match(event, el, "extra") == true) {
      el.innerHTML = "PASSED";
    }
  }
}