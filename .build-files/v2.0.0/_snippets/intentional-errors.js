async intentionalErrors(_event, el) {
  await new Promise(resolve => setTimeout(resolve, 2400));
  console.error(`HEADS UP: There are intentional 404 errors on this page!
The code on the page is live. That includes the examples and tests demonstrating failing fetch calls that throw errors. Any 404s can safely be ignored.`);
}

