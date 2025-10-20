## Roadmap 

- TODO: Added a top level `class State {}` and
`const s = new State()` to provide state across
components. 

- TODO: Set up the `<bitty-#-#>` tag to receive signals
via `data-receive`

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

- TODO: Include a top level `s = new State()`
object that all the bitty elements
on the page can use to collaborate. 
