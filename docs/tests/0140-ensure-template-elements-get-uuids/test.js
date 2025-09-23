const template = document.createElement("template");
template.innerHTML = `<button data-send="testStub">FAILED</button>`;

export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  async runTest(event, el) {
    let newButton = template.content.cloneNode(true);
    el.replaceChildren(newButton);
    // sleep for test to wait for observer
    // to update the UUID.
    await this.sleep(200);
    if (el.childNodes[0].dataset.uuid !== undefined) {
      el.childNodes[0].innerHTML = "PASSED";
      el.childNodes[0].classList.add("test");
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
