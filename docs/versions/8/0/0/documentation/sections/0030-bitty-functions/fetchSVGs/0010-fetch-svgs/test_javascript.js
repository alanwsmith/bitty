export const bitty = {};

export async function signal_018F5(_, __, el) {
  const svgs = await bitty.fetchSVGs(
    "/versions/8/0/0/documentation/samples/multiple-svgs/index.html",
  );
  if (svgs["example_svg_alfa"].querySelector("text").innerHTML === "alfa") {
    el.innerHTML = bitty.time();
  }
}
