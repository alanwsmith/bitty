export default class {
  runTest0110(event, el) {
    const checkEl = this.api.querySelector("[data-send]");
    console.log(checkEl);
    console.log(checkEl.dataset);
    if (checkEl.dataset.bittyid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}