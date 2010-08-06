# CouchDB: The Definitive Guide

This is the hope of the open source book “CouchDB: The Definitive Guide”


## Organisation

`draft/` is the always work in progress version of the next edition.

`editions/` has a list of all editions of the book. `editions/1/` is the current edition of the book, when we do a second edition, it will be under `editions/2` and so on.

`editions/1/en` is the main book content. Translations can be found under `editions/1/..`. Each language can be found under its respective language code (de, fr, jp…; see <http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes>)


## Contributions

This book is open source under the Creative Commons Attribution 3.0 Unported license (http://creativecommons.org/licenses/by/3.0/).

The authors encourage you to fork, improve and publish our work under the terms of the license. Big thanks to O’Reilly for allowing this!

If you feel like giving back, please use GitHub pull-requests [TODO: link] to notify us of new content. We’re equally happy about issues [TODO: link] you raise to get our attention.

Chris, Jan and Noah retain editorial control over any changes anyone submits.


## Publication

Every once in a while, O’Reilly will take the current `en` version and turn it into a printed book. When that’s done, we’ll create a new directory under `editions/` to hold a stable snapshot of that release.


## Translations

We’d like to encourage you to start translating the book into your native language (or language of choice, really). We’re continuously publishing our work and all translations, so our readers always get the most up to date information.

If you like to see a translation in a particular language, please first check if one exists already. If not, follow the instructions below.


### Starting a Translation

Only ever start a translation from the `en/` directory under `editions/<number>`. Do not try to translate `draft/` as it is constantly changing. Do not try to translate from any other language as `en/` is most likely the most complete source.

Here’s how you would make a german (de) translation.

    cd editions/1
    cp -r en de
    git add de
    git commit -m 'Start German translation' de


#### Styles

If you need custom CSS rules for your tranlsations, please create a new file `style.css` in `editions/1/de/` and add another `<link rel="stylesheet" href="../style.css">` line to your HTML files.


### Publishing a Translation

You’re free to publish a translation under the aforementioned license. O’Reilly voiced interest in publishing translations as well, but no definite plans have been made. We’re happy to put you in touch with our editor to discuss printed editions of translations further.

## Relax


