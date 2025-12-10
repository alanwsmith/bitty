export default class {
  runTest0127(event, element) {
    if (event.uuid !== undefined) {
      element.innerHTML = "PASSED";
    }
  }
}
