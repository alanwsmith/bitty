// deno-fmt-ignore-file

export class Widget {

  #sliderValue;

  _setValue(data) {
    this.#sliderValue = data.target.value;
  }

  $sliderValue(el, _) {
    el.value = this.#sliderValue;
  }

}
