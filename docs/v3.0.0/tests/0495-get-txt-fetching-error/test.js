export default class {
  async runTest0495(_event, el) {
    const url = "/v3.0.0/tests/0495-get-txt-fetching-error/intentionally-missing-file.txt";
    const response = await this.api.getTXT(url);
    // const targetArray = [];
    // const targetOptions = {};
    if (response.error.type === "fetching" 
          && response.error.message !== undefined
          && response.error.status === 404 
          && response.error.statusText === "Not Found"
          // && response.error.url === url // TODO: create regex for url so it works on localhost and pord
          && response.error.incomingMethod === "getTXT" 
          // && response.error.subs === targetArray // TODO: Figure out how to validate the subs array
          // && response.error.options === targetOptions // TODO: Figure out how to validate the options object
) {
      el.innerHTML = "PASSED";
    }
  }
}
