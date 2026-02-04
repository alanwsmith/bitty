export default class {
  runTest0720(_event, el) {
    const initialTemplate = `<div>TARGET</div>`;
    const items = [
      'ALFA', 'BRAVO', 'CHARLIE'
    ];
    const subs = [
      ["TARGET", items] 
    ];
    const newTXT = this.api.makeTXT(initialTemplate, subs);
    const targetTXT = "<div>ALFABRAVOCHARLIE</div>";
    if (newTXT === targetTXT) {
      el.innerHTML = "PASSED";
    }
  } 
}
