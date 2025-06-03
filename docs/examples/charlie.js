export class Wrapper {
  #sliderValue;

  _setValue(event) {
    this.#sliderValue = event.target.value;
  }

  $sliderValue(el, _) {
    el.value = this.#sliderValue;
  }
}
