export default class {
  createElements(el, _event) {
    const display = document.createElement("div");
    display.innerHTML = "Waiting for slider";
    display.dataset.receive = "update";
    el.replaceChildren(display);
    const slider = document.createElement("input");
    slider.type = "range";
    slider.value = "0";
    slider.dataset.send = "update";
    el.appendChild(slider);
  }

  elementsAdded(el, _event) {
    el.innerHTML = "Elements added";
  }

  update(el, event) {
    el.innerHTML = event.target.value;
  }
}
