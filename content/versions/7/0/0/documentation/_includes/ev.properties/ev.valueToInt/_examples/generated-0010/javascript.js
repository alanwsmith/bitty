[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvPropertiesEvValuetoint0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvPropertiesEvValuetoint0010(ev, el) {
    if (ev.valueToFloat === 3030) {
      el.innerHTML = "got int";
    }
  }
}
