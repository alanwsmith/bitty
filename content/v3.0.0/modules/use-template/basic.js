const template = `<div>The quick brown fox</div>`;

export default class {
  useBasicTemplate(_event, el) {
    const content = this.api.useTemplate(template);
    el.appendChild(content);
  }
}