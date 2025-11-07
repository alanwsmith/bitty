export default class {
  async runTest0390(_event, el) {
    const url = "/[@ json.version.version_dir @]/tests/0390-get-json/payload.json";
    const response = await this.api.getJSON(url);
    console.log('---------------------------------')
    console.log(response)
    console.log('---------------------------------')
    if (response.value) {
      el.innerHTML = response.value.status;
    }
  }
}
