export class Wrapper {
  #sliderValue;

  _updateValue(event) {
    this.#sliderValue = event.target.value;
  }

  $valueSlider1(_) {
    return this.#sliderValue;
  }

  $valueSlider2(_) {
    return this.#sliderValue;
  }
}
