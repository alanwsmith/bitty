const template = `<div>the quick brown fox</div>`;

export default class {
  loadDataInitExample(_event, el) {
    for (let i = 0; i < 5; i += 1) {
      const newEl = this.api.makeElement(template);
      el.appendChild(newEl);
    }
  }
}