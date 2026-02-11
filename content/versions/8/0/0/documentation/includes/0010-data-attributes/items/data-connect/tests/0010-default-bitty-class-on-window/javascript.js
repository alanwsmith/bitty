<script>
  window.BittyClass = class {
    bittyReady() {
      this.api.trigger("signal_d5395");
    }

  signal_d5395(_, el) {
      el.innerHTML = "PASSED";
    }
  }
</script>

