export default class {
  makeRegExHTML(_evnet, el) {
    const template = `<div>The 0000 KIND fox</div>`;
    const subs = [
      [/\d+/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const newEl = this.api.useHTML(template, subs);
    el.appendChild(newEl);
  }
}