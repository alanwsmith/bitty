## Roadmap 

- TODO: Add a `bittyReady()` call that
works like `bittyInit()` but happens
after `this.runSendFromComponent();`

- TODO: Add more tests for bittyCatch()

- TODO: Allow sending forward without
having to pass a null event. That is, 
if there's only one argument, it's
treated as the signal with a null event. 
So, `this.api.forward("NAME")` is 
equivalent to `this.api.forward(null, "NAME")`

- TODO: Added `data-s` alias for `data-send`
and `data-r` attribute for `data-receive`

- TODO: Added `makeTXT` which returns a 
text value from a template after running
substitutions over it. 

- TODO: Investigate: Added a `disconnectedCallback()`
to clean up anything that can be
removed when a component is removed.

- TODO: Added `await:signal` to `data-send`
and `this.api.forward(event, "await:signal")`
to await async methods.

- TODO: Set up the `bitty` tag to listen
for signals with `data-receive` to allow
for things like completely switching out
the contents of the component without
having to rely on a child element calling
`.parentNode`. 

