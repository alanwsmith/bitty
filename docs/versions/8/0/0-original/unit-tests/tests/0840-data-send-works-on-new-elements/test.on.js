const template = `<button data-send="update0840">Click</button>`;

export default class {
  bittyReady() {
    this.api.localTrigger("runTest0840");
  }

  incoming0840(_event, el) {
    const newButton = this.api.makeElement(template);
    el.appendChild(newButton);
    newButton.click();
  }

  runTest0840(_event, el) {
    this.api.trigger("incoming0840");
  }

  update0840(_event, el) {
    el.innerHTML = "PASSED";
  }
}