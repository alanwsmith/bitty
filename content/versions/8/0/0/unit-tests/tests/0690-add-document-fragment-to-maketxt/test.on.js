const elTemplate = `<div>TARGET</div>`;

export default class {
  runTest0690(_event, el) {
    const fragmentTemplate = document.createElement("template");
    fragmentTemplate.innerHTML = "<div>F1</div><div>F2</div>"; 
     const fragment = fragmentTemplate.content.cloneNode(true);
     const subs = [
       ["TARGET", fragment]
     ];
    const newTEXT = this.api.makeTEXT(elTemplate, subs);
    if (newTEXT === '<div><div>F1</div><div>F2</div></div>') {
      el.innerHTML = "PASSED";
    }
  }
}
