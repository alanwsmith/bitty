export default class {
  matchWithKey(event, el) {
    const key = "extra";
    const doesItMatch = this.api.match(event, el, key);
    el.innerHTML = doesItMatch;
  }
}