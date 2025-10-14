export default class {
  async bittyInit() {
    this.api.addEventListener("altevent", () => {
      this.api.forward(null, "runTest0350");
    });
    const event = new Event("altevent");
    this.api.dispatchEvent(event);
  }

  runTest0350(_event, element) {
    element.innerHTML = "PASSED";
  }
}
