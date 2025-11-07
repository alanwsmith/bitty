export default class {
  runTest0110(event, el) {
    if (event.target.dataset.bittyid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}