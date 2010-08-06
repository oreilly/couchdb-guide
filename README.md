CouchDB: The Definitive Guide
=============================

This is the source code repository for a free book about Apache CouchDB.

Introduction
------------

The book is called:

> CouchDB: The Definitive Guide

The book is published by:

> O'Reilly Media

The book is available under a free license:

> [Creative Commons Attribution](http://creativecommons.org/licenses/by/3.0/)

We believe that community software needs community documentation. You can
download and play with CouchDB for free, and similarly you can download and play
with this book for free. You can inspect the source code for CouchDB and make
improvements to it, and similarly you can inspect the source code for this book
and make improvements to it. If you want to contribute, please do so! Fork it,
hack on it, and send back improvements! If you want to support the project, you
can do so by [buying a copy](http://oreilly.com/catalog/9780596155902) of the
book in digital or printed form.

Dependencies
------------

We edit the book in HTML and accept contributions in HTML. HTML allows us a lot
of freedom as authors, and makes editing much easier. Before going to print
we hand the HTML to O'Reilly Media, and they convert this into DocBook. DocBook
allows a lot of control over the typesetting and publishing of the book. Once
that process is complete, O'Reilly Media hand us back the final DocBook, which
now includes any modifications from our editors. We then transform this into
HTML, and tidy it up. Then the process starts over from the beginning again!

You must install the DocBook XSL stylesheets to generate the HTML:

    sudo port install docbook-xsl

You must install Tidy to clean the HTML:

    sudo port install tidy

You can now generate HTML from the DocBook source.

Instructions
------------

The DocBook source for the book is under:

    src/EDITION

So, the first edition of the book can be found at:

    src/01/book.xml

And the images used for the first edition of the book can be found at:

    src/01/figs

The tools we use to convert this into HTML can be found at:

    bin/

You can transform the DocBook to HTML by running:

    bin/transform.sh src/EDITION/book.xml

You can tidy the HTML files by running:

    bin/tidy.sh ch01.html

The HTML we generate with this process is held in the `gh-pages` branch.
