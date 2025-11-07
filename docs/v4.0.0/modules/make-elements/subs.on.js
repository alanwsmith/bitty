export default class {
  makeElementsSubs(_event, el) {
    const html = `<div>The SPEED KIND fox</div>`;
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const content = this.api.makeElements(
      html, subs
    );
    el.replaceChildren(content);
  }
}