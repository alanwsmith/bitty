[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvMethodsEvProptofloat0040 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvProptofloat0040(ev, el) {
    el.innerHTML = ev.propToFloat("a-key-that-does-not-exist");
  }
}
