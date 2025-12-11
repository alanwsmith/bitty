const template = document.createElement("template");
template.innerHTML =
  `<button data-send="updateFromTemplate" data-receive="updateFromTemplate">Click Me</button>`;

export default class {
  bittyInit() {
    this.api.replaceChildren(template.content.cloneNode(true));
  }

  updateFromTemplate(_event, element) {
    element.innerHTML = Date.now();
  }
}
