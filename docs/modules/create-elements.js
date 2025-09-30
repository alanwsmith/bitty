export default class {
  createElements(_event, element) {
    const display = document.createElement("div");
    display.innerHTML = "Waiting for slider";
    display.dataset.receive = "update";
    element.replaceChildren(display);
    const slider = document.createElement("input");
    slider.type = "range";
    slider.value = "0";
    slider.dataset.send = "update";
    element.appendChild(slider);
  }

  elementsAdded(_event, element) {
    element.innerHTML = "Elements added";
  }

  update(event, element) {
    element.innerHTML = event.target.value;
  }
}