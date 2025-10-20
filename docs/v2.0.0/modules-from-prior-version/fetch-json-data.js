export default class {
  async stars(_event, el) {
    const url = el.dataset.url;
    const data = await this.api.fetchJson(url);
    el.innerHTML = data.stargazers_count;
  }
}