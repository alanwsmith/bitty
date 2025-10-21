## Roadmap 

- TODO: rename `useHTML` to `makeEl` when
the next breaking change bump to v3.x.x happens

- TODO: When returning values from fetches
return an object with either `{ ok: PAYLOAD }`, 
or `{ error: { text: ERROR_TEXT } }` with 
extra data coming down in the error object
like status codes for HTML errors. 

- TODO: Added a `getEl` that gets a single
HTML element instead of a document fragment
like `getHTML` does

- TODO: Added ingestion of fucntions from 
the module js files into `this.api.fn`. 
If there are naming collisions the order
last one in the chain of `[@ config.tag_name @]`,
`window.bittyFunctions`, module function
exports wins. 

- TODO: Set up the `<bitty-#-#>` tag to receive 
signals via `data-receive`

- TODO: Added `usePageTemplate()` that pulls
a template from the overall page via
a query selector.

- TODO: Set up the `bitty` tag to listen
for signals with `data-receive` to allow
for things like completely switching out
the contents of the component without
having to rely on a child element calling
`.parentNode`. 

- TODO: Added `await:signal` to `data-send`
and `this.api.forward(event, "signal")`
to await async methods