// deno-fmt-ignore-file

export class Widget {

  #value = 15;

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
