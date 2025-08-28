export class Wrapper {
  #sliderValue = 10;

  _updateValue(event) {
    this.#sliderValue = event.target.value;
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
