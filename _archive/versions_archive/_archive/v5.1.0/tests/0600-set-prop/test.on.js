export default class {
  bittyInit() {
    this.api.setProp("--test0600", "1rem");
  }

  runTest0600(_event, el) {
    if (
      document.documentElement.style.getPropertyValue(`--test0600`) === "1rem"
    ) {
      el.innerHTML = "PASSED";
    }
  }
}
