export class ExampleClass {
  bittyReady() {
    this.api.trigger("signal_0010_data_attributes_data_connect_0040_connect_to_specific_remote_class");
  }

  signal_0010_data_attributes_data_connect_0040_connect_to_specific_remote_class(_, el) {
    el.innerHTML = "PASSED";
  }
}
