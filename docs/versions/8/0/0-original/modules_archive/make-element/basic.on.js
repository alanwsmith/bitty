export default class {
  makeElementBasic(_evnet, el) {
    const html = `<div>The quick brown fox</div>`;
    const newEl = this.api.makeElement(html);
    newEl.classList.add("green");
    el.replaceChildren(newEl);
  }
}