export default class {
  async runTest0130(_event, el) {
    const newDiv = document.createElement("div");
    await this.api.appendChild(newDiv);
    if (newDiv.dataset.bittyid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
