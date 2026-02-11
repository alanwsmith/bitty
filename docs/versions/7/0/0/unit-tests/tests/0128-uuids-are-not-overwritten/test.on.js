export default class {
  bittyInit() {
    const els = this.api.querySelectorAll("[data-uuid]");
    [...els].forEach((el) => {
      if (el.dataset.uuid === "original-uuid") {
        el.innerHTML = "PASSED";
      }
    });
  }
}