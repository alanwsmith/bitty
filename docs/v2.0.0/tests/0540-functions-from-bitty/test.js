export default class {
  runTest0540(event, el) {
    this.api.fn.setProp("--test", "PASSED");
    el.innerHTML = document.documentElement.style.getPropertyValue("--test");
  }
}