const svgString = `
<svg viewBox="0 0 240 30" xmlns="http://www.w3.org/2000/svg">
  <text x="4" y="20" class="svg-test-class">FAILED</text>
</svg>`;

export default class {
  runTest1380(_, el) {
    const subs = [
      ["FAILED", "PASSED"],
    ];
    const svg = this.api.makeSVG(svgString, subs);
    el.replaceChildren(svg);
    el.classList.remove("test");
  }
}