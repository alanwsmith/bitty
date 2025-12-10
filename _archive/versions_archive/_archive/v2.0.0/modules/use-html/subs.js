export default class {
  makeSubsHTML(_evnet, el) {
    const template = `<div>The SPEED KIND fox</div>`;
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const newEl = this.api.useHTML(template, subs);
    el.appendChild(newEl);
  }
}