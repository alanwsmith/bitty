export default class {
  makeElementSubs(_evnet, el) {
    const template = `<div>The SPEED KIND fox</div>`;
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const newEl = this.api.makeElement(template, subs);
    el.appendChild(newEl);
  }
}