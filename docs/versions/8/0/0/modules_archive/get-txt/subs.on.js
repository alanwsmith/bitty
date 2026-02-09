export default class {
  async getTEXTSubs(_event, el) {
    const url = "//payloads/get-txt/subs.txt";
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const options = {};
    const response = await this.api.getTEXT(
      url, subs, options
    );
    if (response.value) {
      el.innerHTML = response.value;
    } else {
      el.innerHTML = response.error;
    }
  }
}