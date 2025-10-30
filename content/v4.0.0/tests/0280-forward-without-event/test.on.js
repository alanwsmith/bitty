export default class {
  bittyInit() {
    this.api.forward(null, "runTest0280");
  }

  runTest0280(event, element) {

    console.log(event);
    element.innerHTML = "PASSED";
  }
}
