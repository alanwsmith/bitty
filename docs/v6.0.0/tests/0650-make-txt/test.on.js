const tmpl = "FAILED";

export default class {
  runTest0650(_event, el) {
    const subs = [
      ["FAILED", "PASSED"]
    ]
    el.innerHTML = this.api.makeTXT(tmpl, subs);
  }
}