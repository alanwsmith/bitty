[# #########################################

DO NOTE EDIT THIS FILE MANUALLY
Use the document test maker python script


######################################### #]

window.TestElPropertiesElValue0010 = class {
    #incomingValue = null;

  runElPropertiesElValue0010(_, el) {
    this.#incomingValue = el.value;
    this.api.localTrigger("runElPropertiesElValue0010Output");
  }

  runElPropertiesElValue0010Output(_, el) {
    el.innerHTML = this.#incomingValue;
  }
}
