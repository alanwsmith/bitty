[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestEvMethodsEvProptoint0030 = class {
    bittyReady() {
    this.api.querySelector("button").click();
  }

  runEvMethodsEvProptoint0030(ev, el) {
    const value = ev.propToInt("charlie");
    if (value === 3000) {
      el.innerHTML = "received integer";
    }
  }
}
