### Documentation To Add

- TODO: Make sure `el.bittyParent` is
covered in docs. 

- TODO: Create note on how the strings
from a given `data-*` can use `async/await`
but that doesn't work across elements. 

That is, if you do `data-send="await:runOne runTwo"`
The `await` will be used in each of the 
individual `<bitty-#-#>` elements but there
is no connection between them. 

- TODO: Document that you can get a signal
coming in afrom anywhere on the page that
does `data-send` (those elements don't
have to be in a bitty tag. That's the 
case because there's not a way in place
to verity that a signal is coming from
antoerh bitty element. and doing
that would add more overhead than 
is worth it. 

    But, `data-receive` attrs only
    work when inside a bitty tag. 



- TODO: Docummnet how `label` sends
a second click event so you want to do 
something like this:

```
  updateTodoItem(ev, el) {
    if (ev.target.nodeName === "INPUT") {
      const checkBox = el.querySelector("input");
      if (el.ds("status") === "not-done") {
        el.dataset.status = "done";
        checkBox.checked = true;
      } else {
        el.dataset.status = "not-done";
        checkBox.checked = false;
      }
    }
  }
```

- TODO: Document that `await this.api.trigger("something")`
doesn't do a real await since the trigger
sends an event up. 

