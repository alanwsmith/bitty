export const b = { init: "mathCheck" };

const arraySize = 1000000;
const iterations = 10;

function shuffleWithCrypto(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    const r = new Uint32Array(1);
    crypto.getRandomValues(r);
    const j = r[0] % i;
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function shuffleWithMath(array) {
  for (let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export async function mathCheck(_, __, el) {
  await runTests(shuffleWithMath, el, "math");
  b.trigger("cryptoCheck");
}

export async function cryptoCheck(_, __, el) {
  runTests(shuffleWithCrypto, el, "crypto");
}

export async function runTests(fn, el, kind) {
  const times = [];
  const items = new Array(arraySize);
  items.fill("the quick brown fox", 0, arraySize - 1);
  for (let iter = 0; iter < iterations; iter += 1) {
    const key = `${kind}${iter}`;
    b.mark(key);
    fn(items);
    b.mark(key);
    const time = parseInt(b.getMarks(key)[1][0] - b.getMarks(key)[0][0], 10);
    times.push(time);
    window.requestAnimationFrame(() => {
      el.innerHTML = `${el.innerHTML}\n${time}ms`;
    });
    await b.sleep(50);
  }
  // el.innerHTML = iters(b.getMarks("math"));
  //  b.trigger("cryptoCheck");
}

export async function x_cryptoCheck(_, __, el) {
  const times = [];
  const items = new Array(arraySize);
  items.fill("the quick brown fox", 0, arraySize - 1);
  for (let iter = 0; iter < iterations; iter += 1) {
    const key = `crypto${iter}`;
    b.mark(key);
    shuffleWithCrypto(items);
    b.mark(key);
    const time = parseInt(b.getMarks(key)[1][0] - b.getMarks(key)[0][0], 10);
    times.push(time);
    window.requestAnimationFrame(() => {
      el.innerHTML = `${el.innerHTML}\n${time}ms`;
    });
    await b.sleep(50);
  }
  // el.innerHTML = iters(b.getMarks("crypto"));
}

function iters(marks) {
  return marks.map((mark, index) => {
    if (marks[index - 1]) {
      return (marks[index][0] - marks[index - 1][0]);
    } else {
      return "x";
    }
  }).filter((mark, index) => index > 0).join("\n");
}