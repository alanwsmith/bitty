export default class {
  async getFragmentOptions(_event, el) {

    const url =  "/v3.0.0/payloads/get-fragment/options/index.html";
    const subs = [];

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const options = {
      method: "POST",
      body: JSON.stringify({ username: "example" }),
      headers: myHeaders,
    }

    const content = await this.api.getFragment(
      url, subs, options
    );
    el.replaceChildren(content);
  }
}