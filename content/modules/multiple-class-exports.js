export default class {
  updateDefaultClass(_event, element) {
    element.innerHTML = Date.now();
  }
}

export class AlternativeClass {
  updateAltClass(_event, element) {
    element.innerHTML = Date.now();
  }
}
