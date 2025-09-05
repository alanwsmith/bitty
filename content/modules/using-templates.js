export default class {
  loadTemplate(event) {
    const template = document.createElement("template");
    template.innerHTML = `<button data-send="update" data-receive="update">Click Me</button>`;
    event.target.innerHTML = "";
    event.target.appendChild(template.content.cloneNode(true));
  }

  update(el, _event) {
    el.innerHTML = `Clicked at ${Date.now()}`;
  }
}
