function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100); // time pad for test
    this.api.querySelector("button").click();
  }

  async runTest0130(_event, element) {
    const newDiv = document.createElement("div");
    const newButton = document.createElement("button");
    newButton.classList.add("test");
    newButton.dataset.receive = "placeholderToGenerateUUID";
    newButton.innerHTML = "FAILED";
    newDiv.appendChild(newButton);
    element.replaceChildren(newDiv);
    // sleep for test to wait for observer
    // to update the UUID.
    await sleep(100);
    if (newButton.dataset.uuid !== undefined) {
      newButton.innerHTML = "PASSED";
    }
  }
}
