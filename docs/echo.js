// deno-fmt-ignore-file

export class Wires {

  #value;

  _setValue(data) {
    this.#value = data.target.value;
  }

  $setSliderA(el, _) {
    el.value = this.#value;
  }

  $setSliderB(el, _) {
    el.value = this.#value;
  }

}
