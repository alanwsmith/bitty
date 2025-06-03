export class Wrapper {
  #sliderValue;

  _updateValue(target) {
    this.#sliderValue = target.value;
  }

  $valueSlider1() {
    return this.#sliderValue;
  }

  $valueSlider2() {
    return this.#sliderValue;
  }
}
