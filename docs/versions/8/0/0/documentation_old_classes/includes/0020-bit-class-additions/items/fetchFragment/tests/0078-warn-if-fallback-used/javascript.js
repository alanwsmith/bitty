async signal_EEB5B(_, el) {  
  const template = document.createElement("template");
  template.innerHTML = "<div>ok</div>";
  const fallback = template.content;
  const url = "/intentionally-missing-file.html";
  const result = await this.fetchFragment(
    "el_EEB5B", url, fallback,
  );
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  } 
}
