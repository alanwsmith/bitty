export default class {
  makeHTMLSubs(_event, el) {
    const html = `<div>The SPEED KIND fox</div>`;
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const content = this.api.makeHTML(
      html, subs
    );
    el.replaceChildren(content);
  }
}