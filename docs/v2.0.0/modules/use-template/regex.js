const template = `<div>The 0000 KIND fox</div>`;

export default class {
  useRegExTemplate(_event, el) {
    const subs = [
      [/\d+/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const content = this.api.useTemplate(
      template, subs
    );
    el.appendChild(content);
  }
}