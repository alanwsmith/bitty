export default class {
  createElements(el, _event) {
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
  }

  elementsAdded(el, _event) {
    el.innerHTML = "Elements added";
  }

  update(el, event) {
    el.innerHTML = event.target.value;
  }
}
