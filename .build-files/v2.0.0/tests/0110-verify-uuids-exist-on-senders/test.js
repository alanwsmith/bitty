export default class {
  runTest0110(event, el) {
    if (event.target.dataset.uuid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
