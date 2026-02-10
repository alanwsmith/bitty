<script>
  window.BittyClass = class {
    bittyReady() {
      this.api.trigger("signal_0010_data_attributes_data_connect_0010_default_bitty_class_on_window");
    }

  signal_0010_data_attributes_data_connect_0010_default_bitty_class_on_window(_, el) {
      el.innerHTML = "PASSED";
    }
  }
</script>

