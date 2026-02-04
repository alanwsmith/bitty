function loadThemeProps() {
  const data = localStorage.getItem("themeProps");
  if (data) {
    data.props.forEach((prop) => {
    });
  }
}
loadThemeProps();
