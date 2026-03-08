export const bitty = {};

export async function $_SIGNAL_(_, __, el) {
  const svgs = await bitty.fetchSVGs(
    "$_SAMPLES_DIR_/multiple-svgs/index.html",
  );
  if (svgs["example_svg_alfa"].querySelector("text").innerHTML === "alfa") {
    el.innerHTML = bitty.time();
  }
}
