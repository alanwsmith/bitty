const tmpl = "FAILED";

export default class {
  bittyInit() {
    this.api.trigger("runTest0650");
  }
  runTest0650(_event, el) {
    const subs = [
      ["FAILED", "PASSED"],
    ];
    el.innerHTML = this.api.makeTXT(tmpl, subs);
  }
}