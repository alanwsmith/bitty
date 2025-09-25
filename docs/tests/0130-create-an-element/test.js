function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100); // time pad for test
    this.api.querySelector("button").click();
  }

  async runTest0130(_event, element) {
    const newButton = document.createElement("button");
    newButton.classList.add("test");
    newButton.dataset.receive = "placeholderToGenerateUUID";
    newButton.innerHTML = "FAILED";
    element.replaceChildren(newButton);
    // sleep for test to wait for observer
    // to update the UUID.
    await sleep(200);
    if (newButton.dataset.uuid !== undefined) {
      newButton.innerHTML = "PASSED";
    }
  }
}
