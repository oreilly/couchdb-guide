<h1>CouchDB: The Definitive Guide</h1>

<p>This is the source for the book’s website.

<h2>Organisation</h2>

<p>The source is organised into the following directories:

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

<p>The draft of the next edition is a work in progress. Like the trunk of an open source project, we will eventually cut from this and hand it over to our publishers. Once the publishing process is complete, we will take back the XML and convert it into HTML. Like a tag of an open source project, this will be frozen in place as an official edition of the book. Translations are subject to change and may be updated at any time.

<h2>Contributions</h2>

<p>The book is made available under a <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution</a> license.

<p>We encourage you to fork our work and make your own improvements under the terms of the license. If you have any changes you want to send back our way, please make a regular pull request via Github. If the authors like your changes, we may integrate them into the official book and give you a credit in the next edition. If you just have an issue to report, please use the regular Github issue system.

<h2>Translations</h2>

<p>We’d like to encourage people to start translating the book into other languages. If you’d like to start a new translation, please first check to see if one exists in that language. If not, you can get started right away. You’re free to publish a translation under the aforementioned license. Our publishers may be interested in your translation if you think the market would be big enough. Please contact us directly to discuss this.

<p>Please observe the following guidelines:

<ul>

<li>You must start your translation from the <code>en/</code> directory under <code>editions/NUMBER</code>.</li>

<li>Do not try to translate <code>draft/</code> as this is constantly changing.</li>

<li>Do not try to translate from any language other than <code>en/</code> is this is unofficial.</li>

</ul>

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
