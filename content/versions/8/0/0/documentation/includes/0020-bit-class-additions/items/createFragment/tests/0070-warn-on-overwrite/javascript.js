signal_3D5CF(_, el) {
  this.setGlobalLogLevel("none");
  this.setLocalLogLevel("none");
  this.createFragment("el_3D5CF", `<div></div>`);
  const result = this.createFragment("el_3D5CF", `<div></div>`);
  if (result.ok === true && result.level === "warn") {
    el.innerHTML = "test passed";
  }
}

