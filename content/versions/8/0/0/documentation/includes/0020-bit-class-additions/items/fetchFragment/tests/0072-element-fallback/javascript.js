async signal_11320(_, el) {  
  this.setLocalLogLevel("none");
  const fallback = document.createElement("div");
  fallback.innerHTML = "test passed";
  const url = "/intentionally-missing-file.html";
  await this.fetchFragment("el_11320", url, fallback);
  el.innerHTML = this.renderFragment("el_11320").children[0].innerHTML;
}

