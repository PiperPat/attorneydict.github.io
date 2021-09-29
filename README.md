
<h1>PATENT GLOSSARY	</h1>
---


A source of all the wonderful words patent attorneys like to use when writing specifications.




----

Technical matter


At the moment, this is just for mechanical inventions. 

There will be categories - if nothing is selected, it will select all of them - each with their own subcategories.

Also a searchbox, so someone can type in "donut straight edges" (classic nut description) and hopefully it will return polygons and torus and aperture.

Finally, there will be a "search" button - this takes any categories or search terms as an input and returns all related words.

Eventually, I think each word will need a definition or a picture, so might deserve its own page. This will require a webserver and possibly an immutable database. Need to check whether that's something GitHub pages supports. But also, I could do this with just javascript.

---


Handling repeated words

It would be pretty dumb to have "ellipse" and "elliptical" as separate entries. They'll both be tags, but given ellipse is the base/unconjugated form, it gets to be _the word_. 


---

The rm-repeats dir was created because the glossary had lots of repeated words and it would have been stupid to check/handle this manually. It takes the file I was entering words into (dict.js) and spits them output into output.js - which is currently what the html file is reading. 
For some reason, rem-repeats has a bug. After 1102, it experiences a brain problem and spits out the same word twice. To resolve this, after 1100 entries, it needs to create a new file. It will then write to that. At the end, it will converge the two documents for one output file. I hope that works... 
