- While bitty is designed to work with the
light DOM it does provide some encapsulation. 
Specifically, event propigation (aka bubbling)
stops at the element. This means that 
multiple instances of an element can be
siblings without interfering with each other
as seen above.  

- Note the use of 
`increment` as the `data-call`
for both the parent and the child elements. 
This is to demonstrate they remain issolated
even though they have the same name. 

  A better approach would be to have different
  names (e.g. `incrementParent`
  and `incrementNested`) to avoid
  confusion. 

  That issolation doesn't not extend to the
  `data-send`/`data-receive`
  attributes as seen in the next example.