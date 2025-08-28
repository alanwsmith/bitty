// deno-fmt-ignore-file

export default class {

  #value;

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
