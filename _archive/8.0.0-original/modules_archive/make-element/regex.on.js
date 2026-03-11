export default class {
  makeElementRegEx(_evnet, el) {
    const html = `<div>The 0000 KIND fox</div>`;
    const subs = [
      [/\d+/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const newEl = this.api.makeElement(html, subs);
    newEl.classList.add("green");
    el.replaceChildren(newEl);
  }
}