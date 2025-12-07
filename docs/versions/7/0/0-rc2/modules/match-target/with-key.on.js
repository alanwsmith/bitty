export default class {
  matchWithKey(event, el) {
    const key = "extra";
    if (this.api.matchTarget(event, el, key)) {
      el.innerHTML = `Matched: ${el.dataset.extra}`;
    } else {
      el.innerHTML = `Did Not Match: ${el.dataset.extra}`;
    }
  }
}