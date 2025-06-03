export class Wrapper {
  #sliderValue;

  _updateValue(target) {
    this.#sliderValue = target.value;
  }

  $valueSlider() {
    return this.#sliderValue;
  }
}
