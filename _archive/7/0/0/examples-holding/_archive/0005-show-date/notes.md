- The is the most basic of examples. 

- The HTML starts with a 
<inline-code>[! filter highlight_html|safe !]<bitty-[@ major_version @]-[@ minor_version @]>[! endfilter !]</inline-code>
tag. 

- The <inline-code>[! filter highlight_html !]<bitty-[@ major_version @]-[@ minor_version @]>[! endfilter !]</inline-code>
has a `data-connect="ShowData"` attribute that connects it to the
`window.ShowDate` class in the JavaScript. 


- The `<button>` has a `data-use="getDate"` attribute that connect
it to the `getDate` method in the JavaScript. 

- Tapping or clicking the button sends it through the `getDate` 
method as the `el` argument. 

- The `getDate` update the `.innerHTML` of the element
with the new date which is displayed in the button. 

