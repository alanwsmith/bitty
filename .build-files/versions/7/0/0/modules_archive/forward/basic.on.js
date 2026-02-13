export default class {
  forwardFirstPart(event, el) {
    el.innerHTML = "event recieved and forwarded";
    this.api.forward(event, "forwardSecondPart");
  }

  forwardSecondPart(event, el) {
    el.innerHTML = `x: ${event.offsetX} - y: ${event.offsetY}`;
  }
}
