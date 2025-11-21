export default class {
  async runTest0830(_event, el) {
    const newEl = document.createElement('div');
    newEl.innerHTML = "UPDATED";
    const subs = [
      ["TARGET", newEl]
    ];
    const url = "/[@ json.version.version_dir @]/tests/0830-add-element-to-gettxt/payload.txt";
    const response = await this.api.getTXT(url, subs);
    if (response.value !== undefined) { 
      const finalTarget = `Test <div>UPDATED</div> Test`;
      if (response.value === finalTarget) {
        el.innerHTML = "PASSED";
      }
    }
  }
}
