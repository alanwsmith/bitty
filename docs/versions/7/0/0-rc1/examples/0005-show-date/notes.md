- The is the most basic of examples. 

- The HTML starts with a 
<inline-code><span class="line-marker"></span><span class="text html basic"><span class="meta tag custom html"><span class="punctuation definition tag begin html">&lt;</span><span class="entity name tag custom html">bitty--</span><span class="punctuation definition tag end html">&gt;</span></span></span></inline-code>
tag. 

- The <inline-code><span class="line-marker"></span><span class="text html basic"><span class="meta tag custom html"><span class="punctuation definition tag begin html">&lt;</span><span class="entity name tag custom html">bitty--</span><span class="punctuation definition tag end html">&gt;</span></span></span></inline-code>
has a `data-connect="ShowData"` attribute that connects it to the
`window.ShowDate` class in the JavaScript. 


- The `<button>` has a `data-use="getDate"` attribute that connect
it to the `getDate` method in the JavaScript. 

- Tapping or clicking the button sends it through the `getDate` 
method as the `el` argument. 

- The `getDate` update the `.innerHTML` of the element
with the new date which is displayed in the button. 