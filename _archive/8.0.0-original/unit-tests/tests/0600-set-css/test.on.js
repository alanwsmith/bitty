export default class {
  bittyInit() {
    this.api.setCSS("--test0600", "1rem");
    this.api.trigger("runTest0600");
  }

  runTest0600(_event, el) {
    if (
      document.documentElement.style.getPropertyValue(`--test0600`) === "1rem"
    ) {
      el.innerHTML = "PASSED";
    }
  }
}
