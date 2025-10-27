export default class {
  runTest0120(_event, element) {
    if (element.dataset.uuid !== undefined) {
      element.innerHTML = "PASSED";
    }
  }
}
