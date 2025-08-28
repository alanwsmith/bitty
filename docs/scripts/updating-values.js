// deno-fmt-ignore-file

export default class {

  #sliderValue;

  setValue(event) {
    this.#sliderValue = event.target.value;
  }

  sliderValue(el, _) {
    el.value = this.#sliderValue;
  }

}
