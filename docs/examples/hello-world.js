export class Wires {
  #number = 0;

  _addOne(_) {
    this.#number += 1;
  }

  $showNumber(el, _) {
    el.innerHTML = this.#number;
  }
}
