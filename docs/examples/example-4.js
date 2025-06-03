export class Wrapper {
  #sliderValue;

  _updateValue(target) {
    this.#sliderValue = target.value;
  }

  $valueSlider1(_) {
    return this.#sliderValue;
  }

  $valueSlider2(_) {
    return this.#sliderValue;
  }
}
