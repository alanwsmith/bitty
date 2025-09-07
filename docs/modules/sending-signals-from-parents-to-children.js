export default class {
  runTest(el, event) {
    el.innerHTML = `Updated ${el.dataset.name} at ${Date.now()}`;
  }
}
