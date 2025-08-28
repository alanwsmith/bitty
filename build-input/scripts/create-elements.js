// deno-fmt-ignore-file

export default class {
  #slidersHaveBeenAdded = false;

  elementStatus(_el, _event) {
  }

  createElements(el, _event) {
    if (this.#slidersHaveBeenAdded === false) {
      el.innerHTML = "";
      const slider = document.createElement("input");
      slider.type = "range";
      slider.value = "0";
      slider.dataset.send = "update";
      el.appendChild(slider);
      const display = document.createElement("div");
      display.innerHTML = "Waiting for value";
      display.dataset.receive = "update";
      el.appendChild(display);
      this.#slidersHaveBeenAdded = true;
    }
  }

  update(el, event) {
    el.innerHTML = event.target.value;
  }
}
