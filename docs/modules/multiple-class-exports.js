export default class {
  updateDefault(_event, el) {
    el.innerHTML = `Default Class at ${Date.now()}`;
  }
}

export class AlternativeClass {
  updateAlt(_event, el) {
    el.innerHTML = `Alternative Class at ${Date.now()}`;
  }
}

