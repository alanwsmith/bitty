export default class {
  async getTXTSubs(_event, el) {
    const url = "/v4.0.0/payloads/get-txt/subs.txt";
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const options = {};
    const response = await this.api.getTXT(
      url, subs, options
    );
    if (response.ok) {
      el.innerHTML = response.ok;
    } else {
      el.innerHTML = response.error;
    }
  }
}
