export default class {
  async runTest0830(_event, el) {
    const newEl = document.createElement('div');
    newEl.innerHTML = "UPDATED";
    const subs = [
      ["TARGET", newEl]
    ];
    const url = "/v5.1.0/tests/0830-add-element-to-gettxt/payload.txt";
    const response = await this.api.getTXT(url, subs);
    if (response.value !== undefined) { 
      console.log(response);
      const finalTarget = `Test <div>UPDATED</div> Test`;
      if (response.value === finalTarget) {
        el.innerHTML = "PASSED";
      }
    }
  }
}