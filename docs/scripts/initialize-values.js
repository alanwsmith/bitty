// deno-fmt-ignore-file

export default class {
  #value = 15;

  setValue(data) {
    this.#value = data.target.value;
  }

  setSliderA(el, _) {
    el.value = this.#value;
  }

  setSliderB(el, _) {
    el.value = this.#value;
  }
}
