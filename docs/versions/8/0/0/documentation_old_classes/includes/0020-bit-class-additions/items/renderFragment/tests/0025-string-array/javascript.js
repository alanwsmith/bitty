signal_378AE(_, el) {
  this.createFragment("fragment_378AE", `<div></div><div class="test">TARGET_378AE</div>`);
  const subs = {
    "TARGET_378AE": ["test ", "passed"],
  };
 el.replaceWith(this.renderFragment("fragment_378AE", subs));
}
