export class Wrapper {
  #sliderValue = 10;

  _updateValue(target) {
    this.#sliderValue = target.value;
  }

  $valueSlider1() {
    return this.#sliderValue;
  }

  $valueSlider2() {
    return this.#sliderValue;
  }

  $valueSliderInit1() {
    return this.#sliderValue;
  }

  $valueSliderInit2() {
    return this.#sliderValue;
  }
}
