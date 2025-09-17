export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }
  async runTest(_event, el) {
    const newButton = document.createElement("button");
    newButton.dataset.receive = "placeholderToGenerateUUID";
    newButton.innerHTML = "FAILED";
    el.replaceChildren(newButton);
    // sleep for test to wait for observer
    // to update the UUID.
    await this.sleep(300);
    if (newButton.dataset.uuid !== undefined) {
      newButton.innerHTML = "PASSED";
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
