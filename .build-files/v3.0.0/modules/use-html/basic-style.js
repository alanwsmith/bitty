export default class {
  makeBasicStyleHTML(_evnet, el) {
    const template = `<div>The quick brown fox</div>`;
    const newEl = this.api.useHTML(template);
    newEl.classList.add("red");
    el.appendChild(newEl);
  }
}