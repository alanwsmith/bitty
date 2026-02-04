[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvMethodsEvProptofloat0030 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvProptofloat0030(ev, el) {
    const value = ev.propToFloat("charlie");
    if (value === 30.03) {
      el.innerHTML = "received float";
    }
  }
}
