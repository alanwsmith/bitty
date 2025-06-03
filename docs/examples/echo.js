export class Wrapper {
  #value;

  _setValue(data) {
    this.#value = event.target.value;
  }

  $setSlider1(el, _) {
    el.value = this.#value;
  }

  $setSlider2(el, _) {
    el.value = this.#value;
  }
}
