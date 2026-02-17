export default class {
  bittyInit() {
    // TODO: Move this to a page where 404s
    // aren't distracting in the console
    //  this.api.trigger("runTest1477");
  }

  async runTest1477(_event, el) {
    const url = "/[@ file.folder @]/payload.txt";
    const response = await this.api.getTEXT(url);
    el.innerHTML = response.unwrapOr("PASSED");
  }
}
