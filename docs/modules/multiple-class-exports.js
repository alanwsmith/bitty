export default class {
  updateDefault(el, _event) {
    el.innerHTML = `Default Class at ${Date.now()}`;
  }
}

export class AlternativeClass {
  updateAlt(el, _event) {
    el.innerHTML = `Alternative Class at ${Date.now()}`;
  }
}

