// deno-fmt-ignore-file

export default class {
  #sliderHasBeenAdded = false;
  #value = 0;

  setValue(data) {
    this.#value = data.target.value;
  }

  makeSlider(data) {
    if (this.#sliderHasBeenAdded === false) {
      const slider = document.createElement("input");
      slider.type = "range";
      slider.dataset.call = "setValue";
      slider.dataset.send = "buttonValue";
      this.bridge.querySelector(".output").append(slider);
      this.#sliderHasBeenAdded = true;
    } else {
      data.target.innerHTML = "Already<br>added";
    }
  }

  buttonValue(el, _) {
    el.innerHTML = this.#value;
  }
}
