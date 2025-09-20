export default class {
  bittyInit() {
    const el = this.api.querySelector("div");
    if (el.dataset.uuid) {
      el.innerHTML = "PASSED";
    }
  }
}
