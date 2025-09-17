export default class {
  runTest(event, el) {
    el.innerHTML = `Updated ${el.dataset.name} at ${Date.now()}`;
  }
}
