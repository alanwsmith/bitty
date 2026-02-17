#incomingValue = null;

  [@ method_name @](_, el) {
    this.#incomingValue = el.valueAsFloat;
    this.api.localTrigger("[@ method_name @]Output");
  }

  [@ method_name @]Output(_, el) {
    if (this.#incomingValue === 10.01) {
      el.innerHTML = "received float";
    }
  }