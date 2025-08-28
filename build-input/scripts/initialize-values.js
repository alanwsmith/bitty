// deno-fmt-ignore-file

export default class {
  #value = 15;

  setValue(data) {
    this.#value = data.target.value;
  }

  setSliderA(el, _event) {
    el.value = this.#value;
  }

  setSliderB(el, _event) {
    el.value = this.#value;
  }
}
