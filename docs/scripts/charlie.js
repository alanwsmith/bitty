// deno-fmt-ignore-file

export default class {

  #sliderValue;

  _setValue(data) {
    this.#sliderValue = data.target.value;
  }

  $sliderValue(el, _) {
    el.value = this.#sliderValue;
  }

}
