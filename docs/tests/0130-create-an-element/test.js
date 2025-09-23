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
    // TODO: Document that newly added elements
    // have an init/setup process that take
    // some amount of time. It happens
    // very quick but it's not instant.
    // So, be aware of race conditions.
    await this.sleep(200);
    if (newButton.dataset.uuid !== undefined) {
      newButton.innerHTML = "PASSED";
      newButton.classList.add("test");
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
