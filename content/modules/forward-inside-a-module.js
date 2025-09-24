export default class {
  forwardedSignal(_event, element) {
    element.innerHTML = Date.now();
  }

  forwardUpdate(event, _element) {
    this.api.forward(event, "forwardedSignal");
  }
}
