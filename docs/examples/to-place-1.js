export class Wrapper {
  #sliderHasBeenAdded = false;
  #value = 0;

  _setValue(data) {
    this.#value = data.target.value;
  }

  _makeSlider(data) {
    if (this.#sliderHasBeenAdded === false) {
      const slider = document.createElement("input");
      slider.type = "range";
      slider.dataset.f = "setValue";
      slider.dataset.s = "buttonValue";
      this.bridge.querySelector(".output").append(slider);
      this.#sliderHasBeenAdded = true;
    } else {
      data.target.innerHTML = "Already<br>added";
    }
  }

  $buttonValue(el, _) {
    el.innerHTML = this.#value;
  }
}
