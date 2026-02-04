[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvMethodsEvProptofloat0020 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvProptofloat0020(ev, el) {
    const value = ev.propToFloat("bravo");
    if (value === 20.02) {
      el.innerHTML = "received float";
    }
  }
}
