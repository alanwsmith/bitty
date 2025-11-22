## Documentation TODO

- Document that only elements with
`data-send`, `data-receive`, and
`data-init` get `data-bittyid` IDs. 
They are added when the element
is connected. 

- Elements added with `this.api.makeElement()`, 
`this.api.makeHTML()`, `this.api.getElement()`, or 
`this.api.getHTML()` that have bitty `data-*`
attributes get `data-bittyid` attrs
when they are created. 

- Elements that are created outside
of `this.api` (e.g. with `document.createElement()`
don't get `data-bittyid` attrs automatically. 
They have to be added manually if
they are needed. 



