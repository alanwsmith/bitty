<script>
  window.BittyClass = class {
    bittyReady() {
      console.log("This is bittyReady from the initial window.BittyClass test");
      this.api.trigger("$SIGNAL_NAME");
    }

    $SIGNAL_NAME(_, el) {
      el.innerHTML = "PASSED";
    }
  }
</script>

