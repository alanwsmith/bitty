// deno-fmt-ignore-file

export class Wires {

  #sliderValue;

  _setValue(data) {
    this.#sliderValue = data.target.value;
  }

  $sliderValue(el, _) {
    el.value = this.#sliderValue;
  }

}
