[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvSenderPropertiesEvSenderValuetoint0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvSenderPropertiesEvSenderValuetoint0010(ev, el) {
    if (ev.sender.valueToFloat === 3131) {
      el.innerHTML = "got int";
    }
  }
}
