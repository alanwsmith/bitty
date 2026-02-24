async $SIGNAL_NAME(_, el) {  
  const fallback = document.createElement("div");
  fallback.innerHTML = "test passed";
  const url = "/intentionally-missing-file.html";
  await this.fetchFragment("el_$HASH", url, fallback);
  el.innerHTML = this.renderFragment("el_$HASH").children[0].innerHTML;
}

