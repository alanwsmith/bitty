[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvSenderMethodsEvSenderProptoint0010 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvSenderMethodsEvSenderProptoint0010(ev, el) {
    const value = ev.sender.propToInt("alfa");
    if (value === 2020) {
      el.innerHTML = "received integer";
    }
  }
}
