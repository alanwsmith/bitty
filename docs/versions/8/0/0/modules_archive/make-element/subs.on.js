export default class {
  makeElementSubs(_evnet, el) {
    const html = `<div>The SPEED KIND fox</div>`;
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const newEl = this.api.makeElement(html, subs);
    newEl.classList.add("green");
    el.replaceChildren(newEl);
  }
}