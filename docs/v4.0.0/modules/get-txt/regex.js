export default class {
  async getTXTRegEx(_event, el) {
    const url = "/v4.0.0/payloads/get-txt/regex.txt";
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "atctic"]
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
