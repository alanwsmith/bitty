export class Wrapper {
  #sliderValue;

  _updateValue(event) {
    this.#sliderValue = event.target.value;
  }

  $valueSlider(_) {
    return this.#sliderValue;
  }
}
