[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvSenderPropertiesEvSenderValue0010 = class {
    bittyReady() {
    this.api.querySelector("input").click();
  }

  runEvSenderPropertiesEvSenderValue0010(ev, el) {
    el.innerHTML = ev.sender.value;
  }
}
