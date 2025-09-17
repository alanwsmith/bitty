export default class {
  createElements(_event, el) {
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

  elementsAdded(_event, el) {
    el.innerHTML = "Elements added";
  }

  update(event, el) {
    el.innerHTML = event.target.value;
  }
}
