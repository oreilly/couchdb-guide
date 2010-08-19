<h1>CouchDB: The Definitive Guide</h1>

<p>This is the source for the “CouchDB: The Definitive Guide” website.

<h2>Organisation</h2>

<dl>

<dt><code>draft/</code></dt>

<dd><p>The draft of next edition.</dd>

<dt><code>editions/</code></dt>

<dd><p>Published editions of the book.</dd>

<dt><code>editions/1</code></dt>

<dd><p>Edition 1 of the book.</dd>

<dt><code>editions/1/en</code></dt>

<dd><p>The English version of edition 1 of the book.</dd>

</dl>

<h2>Contributions</h2>

<p>This book is open source under the Creative Commons Attribution 3.0 Unported license (http://creativecommons.org/licenses/by/3.0/).

<p>The authors encourage you to fork, improve and publish our work under the terms of the license. Big thanks to O’Reilly for allowing this!

<p>If you feel like giving back, please use GitHub pull-requests [TODO: link] to notify us of new content. We’re equally happy about issues [TODO: link] you raise to get our attention.

<p>Chris, Jan and Noah retain editorial control over any changes anyone submits.

<h2>Publication</h2>

<p>Every once in a while, O’Reilly will take the current `en` version and turn it into a printed book. When that’s done, we’ll create a new directory under `editions/` to hold a stable snapshot of that release.

<h2>Translations</h2>

<p>We’d like to encourage you to start translating the book into your native language (or language of choice, really). We’re continuously publishing our work and all translations, so our readers always get the most up to date information.

<p>If you like to see a translation in a particular language, please first check if one exists already. If not, follow the instructions below.

<h3> Starting a Translation</h3>

<p>Only ever start a translation from the `en/` directory under `editions/<number>`. Do not try to translate `draft/` as it is constantly changing. Do not try to translate from any other language as `en/` is most likely the most complete source.

<p>Here’s how you would make a german (de) translation.

    cd editions/1
    cp -r en de
    git add de
    git commit -m 'Start German translation' de


<h4>Styles</h4>

<p>If you need custom CSS rules for your tranlsations, please create a new file `style.css` in `editions/1/de/` and add another `<link rel="stylesheet" href="../style.css">` line to your HTML files.

<h3>Publishing a Translation</h3>

<p>You’re free to publish a translation under the aforementioned license. O’Reilly voiced interest in publishing translations as well, but no definite plans have been made. We’re happy to put you in touch with our editor to discuss printed editions of translations further.

<h2>Relax</h2>
