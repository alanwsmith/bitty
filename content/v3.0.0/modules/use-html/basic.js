export default class {
  makeBasicHTML(_evnet, el) {
    const template = `<div>The quick brown fox</div>`;
    const newEl = this.api.useHTML(template);
    el.appendChild(newEl);
  }
}