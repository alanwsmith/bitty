export default class {
  runTest0710(_event, el) {
    const initialTXT = `<div>TARGET</div>`;
    const fragmentTemplate = `<div>ALFA</div><div>BRAVO</div>`;
    const newFragments = [
      this.api.makeHTML(fragmentTemplate),
      this.api.makeHTML(fragmentTemplate),
    ];
    const subs = [
      ["TARGET", newFragments]
    ];
    const newTXT = this.api.makeTXT(initialTXT, subs);
    // console.log(`710: ${newTXT}`);
    const targetTXT = `<div><div>ALFA</div><div>BRAVO</div><div>ALFA</div><div>BRAVO</div></div>`;
    if (newTXT === targetTXT) {
      el.innerHTML = "PASSED";
    }
  }
}
