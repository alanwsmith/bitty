const elTemplate = `<div>TARGET</div>`;

export default class {
  runTest0690(_event, el) {
    console.log("asdf");
    const fragmentTemplate = document.createElement("template");
    fragmentTemplate.innerHTML = "<div>F1</div><div>F2</div>"; 
     const fragment = fragmentTemplate.content.cloneNode(true);
     const subs = [
       ["TARGET", fragment]
     ];
    const newTXT = this.api.makeTXT(elTemplate, subs);
    if (newTXT === '<div><div>F1</div><div>F2</div></div>') {
      el.innerHTML = "PASSED";
    }
  }
}