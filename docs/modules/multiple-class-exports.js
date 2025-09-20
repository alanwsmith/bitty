export default class {
  updateDefault(_event, element) {
    element.innerHTML = `Default Class at ${Date.now()}`;
  }
}

export class AlternativeClass {
  updateAlt(_event, element) {
    element.innerHTML = `Alternative Class at ${Date.now()}`;
  }
}

