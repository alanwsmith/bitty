export default class {
  async getSVGSubs(_event, el) {
    const url = "/v3.0.0/payloads/get-svg/subs.svg";
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const response = await this.api.getSVG(
      url, subs
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}

