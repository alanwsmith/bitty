export class Wrapper {
  #sliderValue = 10;

  _updateValue(target) {
    this.#sliderValue = target.value;
  }

  $valueSlider1(_) {
    return this.#sliderValue;
  }

  $valueSlider2(_) {
    return this.#sliderValue;
  }

  $valueSliderInit1(_) {
    return this.#sliderValue;
  }

  $valueSliderInit2(_) {
    return this.#sliderValue;
  }
}
