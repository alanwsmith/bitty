[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvPropertiesEvValuetofloat0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvPropertiesEvValuetofloat0010(ev, el) {
    if (ev.valueToFloat === 75.75) {
      el.innerHTML = "got float";
    }
  }
}
