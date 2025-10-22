export default class {
  makeElementBasicStyle(_evnet, el) {
    const template = `<div>The quick brown fox</div>`;
    const newEl = this.api.makeElement(template);
    newEl.classList.add("red");
    el.appendChild(newEl);
  }
}