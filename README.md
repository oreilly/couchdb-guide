<h1>CouchDB: The Definitive Guide</h1>

This is the source code repository for a free book about Apache CouchDB.

<h2>Introduction</h2>

<p>The book is called <em>CouchDB: The Definitive Guide</em> and is published by O’Reilly Media under a <a href="http://creativecommons.org/licenses/by/3.0/">free license</a>.

<p>We believe that community software needs community documentation. You can inspect the source code for CouchDB and make improvements to it, and similarly you can inspect the source code for this book and make improvements to it. If you want to contribute, please do so! If you want to support the project, you can do so by <a href="http://oreilly.com/catalog/9780596155902">buying a copy</a> of the book in digital or printed form.

<h2>Dependencies</h2>

<p>We edit the book in HTML and accept contributions in HTML.

<p>HTML allows us a lot of freedom as authors, and makes editing much easier. Before going to print we hand the HTML to O’Reilly Media, and they convert this into DocBook. DocBook allows a lot of control over the typesetting and publishing of the book. Once that process is complete, O’Reilly Media hand us back the final DocBook, which now includes any modifications from our editors. We then transform this into HTML, and tidy it up.

<p>You must install the DocBook XSL stylesheets to generate the HTML:

<pre>
sudo port install docbook-xsl
</pre>

<p>You must install Tidy to clean the HTML:

<pre>
sudo port install tidy
</pre>

<p>You can now generate HTML from the DocBook source.

<h2>Instructions</h2>

<p>The DocBook source for the book is under:

<pre>
src/EDITION
</pre>

<p>So, the first edition of the book can be found at:

<pre>
src/01/book.xml
</pre>

<p>And the images used for the first edition of the book can be found at:

<pre>
src/01/figs
</pre>

<p>The tools we use to convert this into HTML can be found at:

<pre>
bin/
</pre>

<p>You can transform the DocBook to HTML by running:

<pre>
bin/transform.sh src/EDITION/book.xml
</pre>

<p>You can tidy the HTML files by running:

<pre>
bin/tidy.sh ch01.html
</pre>

<p>The HTML we generate with this process is held in the <a href="http://github.com/oreilly/couchdb-guide/tree/gh-pages">gh-pages</a> branch.
