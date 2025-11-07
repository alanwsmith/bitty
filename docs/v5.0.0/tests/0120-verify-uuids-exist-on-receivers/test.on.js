export default class {
  runTest0120(_event, element) {
    if (element.dataset.bittyid !== undefined) {
      element.innerHTML = "PASSED";
    }
  }
}