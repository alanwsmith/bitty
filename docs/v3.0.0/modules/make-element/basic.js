export default class {
  makeElementBasic(_evnet, el) {
    const template = `<div>The quick brown fox</div>`;
    const newEl = this.api.makeElement(template);
    el.appendChild(newEl);
  }
}