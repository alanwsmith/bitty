- A [Mutation Observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)
watches the <code>bitty-1-1</code>
element's DOM Tree for new elements. When it sees one
it runs the process to add UUIDs and set up signals
via the attributes where necessary. 

- The <code>button</code> sends two signals. The first is
<code>createElements</code> which is received by
the div that holds the new elements. 

  The second is <code>elementsAdded</code> which
  is received by the button's parent <code>div</code>
  which remove the original <code>button</code>
  in its process.
