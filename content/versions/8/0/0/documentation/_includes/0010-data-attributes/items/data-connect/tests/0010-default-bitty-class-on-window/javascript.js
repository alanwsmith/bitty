<script>
  window.BittyClass = class {
    bittyReady() {
      this.api.trigger("$METHOD_NAME");
    }

    $METHOD_NAME(_, el) {
      el.innerHTML = "PASSED";
    }
  }
</script>

