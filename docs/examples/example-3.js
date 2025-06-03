export class Wrapper {
  #sliderValue;

  _updateValue(target) {
    this.#sliderValue = target.value;
  }

  $valueSlider(_) {
    return this.#sliderValue;
  }
}
