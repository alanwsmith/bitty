export default class {
  runTest0710(_event, el) {
    const initialTEXT = `TARGET`;
    const fragmentTemplate = `<div>ALFA</div><div>BRAVO</div>`;
    const newFragments = [
      this.api.makeHTML(fragmentTemplate),
      this.api.makeHTML(fragmentTemplate),
    ];
    const subs = [
      ["TARGET", newFragments],
    ];
    const newTEXT = this.api.makeTEXT(initialTEXT, subs);
    if (newTEXT.substring(0, 10) === "<div data-") {
      el.innerHTML = "PASSED";
    }
  }
}