export default class {
  runTest0720(_event, el) {
    const initialTemplate = `<div>TARGET</div>`;
    const items = [
      'ALFA', 'BRAVO', 'CHARLIE'
    ];
    const subs = [
      ["TARGET", items] 
    ];
    const newTEXT = this.api.makeTEXT(initialTemplate, subs);
    const targetTEXT = "<div>ALFABRAVOCHARLIE</div>";
    if (newTEXT === targetTEXT) {
      el.innerHTML = "PASSED";
    }
  } 
}