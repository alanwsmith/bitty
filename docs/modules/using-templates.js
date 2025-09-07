const template = document.createElement("template");
template.innerHTML = `<button data-send="update" data-receive="update">Click Me</button>`;

export default class {
  init() { 
    this.api.replaceChildren(template.content.cloneNode(true));
  }

  update(el, _event) {
    el.innerHTML = `Clicked at ${Date.now()}`;
  }
}
