const template = document.createElement("template");
template.innerHTML =
  `<button data-send="update" data-receive="update">Click Me</button>`;

export default class {
  bittyInit() {
    this.api.replaceChildren(template.content.cloneNode(true));
  }

  update(_event, element) {
    element.innerHTML = `Clicked at ${Date().toString()}`;
  }
}
