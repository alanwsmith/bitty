export default class {
  matchWithUUID(event, el) {
    if (this.api.matchTarget(event, el)) {
      el.innerHTML = "CLICKED";
    } else {
      el.innerHTML = "-------";
    }
  }
}
