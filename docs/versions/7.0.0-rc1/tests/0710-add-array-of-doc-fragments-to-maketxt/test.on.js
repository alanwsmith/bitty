export default class {
  runTest0710(_event, el) {
    const initialTXT = `TARGET`;
    const fragmentTemplate = `<div>ALFA</div><div>BRAVO</div>`;
    const newFragments = [
      this.api.makeHTML(fragmentTemplate),
      this.api.makeHTML(fragmentTemplate),
    ];
    const subs = [
      ["TARGET", newFragments],
    ];
    const newTXT = this.api.makeTXT(initialTXT, subs);
    if (newTXT.substring(0, 10) === "<div data-") {
      el.innerHTML = "PASSED";
    }
  }
}