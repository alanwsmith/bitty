export default class {
  matchWithUUID(event, el) {
    if (this.api.matchSender(event, el)) {
      el.innerHTML = "CLICKED";
    } else {
      el.innerHTML = "-------";
    }
  }
}