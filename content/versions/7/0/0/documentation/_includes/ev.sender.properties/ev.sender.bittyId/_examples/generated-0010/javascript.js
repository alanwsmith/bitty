[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvSenderPropertiesEvSenderBittyid0010 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvSenderPropertiesEvSenderBittyid0010(ev, el) {
    if (ev.sender.bittyId !== undefined) {
      el.innerHTML = "has id";
    }
  }
}
