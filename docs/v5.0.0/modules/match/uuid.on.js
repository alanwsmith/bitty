export default class {
  matchWithUUID(event, el) {
    if (this.api.match(event, el)) {
      el.innerHTML = "CLICKED";
    } else {
      el.innerHTML = "-------";
    }
  }
}