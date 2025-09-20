export default class {
  update(_event, element) {
    element.innerHTML = Date.now();
  }
}

export class AlternativeClass {
  update(_event, element) {
    element.innerHTML = Date.now();
  }
}
