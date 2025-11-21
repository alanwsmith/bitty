export default class {
  async getTXTSubs(_event, el) {
    const url = "/v5.1.0/payloads/get-txt/subs.txt";
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const options = {};
    const response = await this.api.getTXT(
      url, subs, options
    );
    if (response.value) {
      el.innerHTML = response.value;
    } else {
      el.innerHTML = response.error;
    }
  }
}