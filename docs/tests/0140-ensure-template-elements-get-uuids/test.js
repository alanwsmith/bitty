function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const template = document.createElement("template");
template.innerHTML = `<button class="test" data-send="testStub">FAILED</button>`;

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    this.api.querySelector("button").click();
  }

  async runTest0140(_event, element) {
    let newButton = template.content.cloneNode(true);
    element.replaceChildren(newButton);
    // sleep for test to wait for observer
    // to update the UUID.
    await sleep(100);
    if (element.childNodes[0].dataset.uuid !== undefined) {
      element.childNodes[0].innerHTML = "PASSED";
      element.childNodes[0].classList.add("test");
    }
  }
}
