async $SIGNAL_NAME(_, el) {  
  this.setLocalLogLevel("none");
  const template = document.createElement("template");
  template.innerHTML = "<div>ok</div>";
  const fallback = template.content;
  const url = "/intentionally-missing-file.html";
  const result = await this.fetchFragment(
    "el_$HASH", url, fallback,
  );
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  } 
}
