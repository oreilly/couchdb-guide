var lastest_edition = "1";

var languages = {
    "en": "English"
};

var scripts = [
    "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js",
    "http://www.google-analytics.com/ga.js"
];

for(i = 0; i < scripts.length; i++) {
    document.write("<script src='" + scripts[i] + "'></script>");
}

var condcoms = [
    '<!--[if IE]><link rel="stylesheet" href="../style/ie_hacks.css" type="text/css" media="screen, projection"><![endif]-->',
    '<!--[if lt IE 8]><link rel="stylesheet" href="../style/ie.css" type="text/css" media="screen, projection"><![endif]-->'
];

for(i = 0; i < condcoms.length; i++) {
    document.write(condcoms[i]);
}

var urls = [
    ["/editions/([0-9]+)/([a-z]{2})/([a-z]+).html", "build_edition"],
    ["/draft/([a-z]+).html", "build_draft"],
    ["/index.html", "build_index"]
];

function check_flag() {
    if ($("body").hasClass("complete")) {
        throw "Document processing is already complete.";
    }
}

function raise_flag() {
    $("body").addClass("complete");
}

function get_header() {
    return '\
      <div class="page_header">\
        <h1 class="logo">\
          <a href="#" title="home">\
            CouchDB <span>The Definitive Guide</span>\
          </a>\
        </h1>\
        <div class="search_box">\
          <form class="search" action="http://www.google.com/search">\
            <input type="hidden" name="as_sitesearch" value="guide.couchdb.org">\
            <input type="text" name="as_q" value="" class="search_field">\
            <input type="submit" value="Search" class="search_btn" />\
          </form>\
        </div>\
      </div>\
    ';
}

function get_footer() {
    return '\
      <div class="footer">\
        <div class="container">\
          <p>An\
          <a href="http://oreilly.com/">O&rsquo;Reilly</a>\
          book about\
          <a href="http://couchdb.apache.org/">CouchDB</a>\
          by\
          <a href="http://jchrisa.net/">J. Chris Anderson</a>\
          ,\
          <a href="http://jan.prima.de/">Jan Lehnardt</a>\
          &\
          <a href="http://nslater.org/">Noah Slater</a>\
        </div>\
      </div>\
    ';
}

function template() {
    var contents = $("body").contents();
    if ($(".home").length) {
        $("body").html('\
          <div class="container">\
            ' + get_header() + '\
            <div class="body">\
            </div>\
          </div>\
          ' + get_footer() + '\
        ');
    } else {
        $("body").html('\
          <div class="container">\
            ' + get_header() + '\
            <div class="notice"></div>\
            <div class="inner wrap">\
              <div class="sidebar">\
              </div>\
              <div class="content body">\
              </div>\
            </div>\
          </div>\
          ' + get_footer() + '\
        ');
    }
    $("div.body").html(contents);
    $("div.buy").html(
        '<iframe src="buy.html" scrolling="no"></iframe>'
    );
}

function link_logo(url) {
    $(".logo a").attr("href", url);
}

function add_notice(text) {
    $(".notice").append(text);
}

function add_notice_draft() {
    add_notice('\
        <p class="inner info_bubble">\
            This edition of the book is a work in progress. Please\
            <a href="http://github.com/oreilly/couchdb-guide/issues">create\
            a ticket</a> for any corrections or suggestions you may have.\
        </p>\
    ');
}

function add_notice_edition(edition) {
    href = document.location.href.replace(
        "/editions/" + edition + "/", "/editions/" + lastest_edition + "/"
    );
    if (edition != lastest_edition) {
        add_notice('\
            <p class="inner info_bubble">\
                This is an outdated edition of the book.\
                Please use the <a href="' + href + '">latest edition</a> for\
                more up-to-date information.\
            </p>\
        ');
    }
}

function add_prev_link() {
    prev_url = $("link/[rel='prev']").attr("href");
    if (prev_url) {
        $(".sidebar").append(
            "<h3><a href='" + prev_url + "'>Previous Page</a></h3>"
        );
    } else {
        $(".sidebar").append(
            "<h3 class='disabled'>Previous Page</h3>"
        );
    }
}

function add_next_link() {
    next_url = $("link/[rel='next']").attr("href");
    if (next_url) {
        $(".sidebar").append(
            "<h3><a href='" + next_url + "'>Next Page</a></h3>"
        );
    } else {
        $(".sidebar").append(
            "<h3 class='disabled'>Next Page</h3>"
        );
    }
}

function add_toc() {
    var old_depth = 0;
    var html = "";
    $("*/[id!='']").each(function(index) {
        var id = $(this).attr("id");
        var name = $(this)[0].nodeName;
        var text = $(this).text();
        if (name.length != 2 || name.slice(0, 1) != "H") {
            return;
        }
        var new_depth = name.slice(1,2);
        if (new_depth > old_depth) {
            html += "<ul>";
        } else if (new_depth < old_depth) {
            html += "</li></ul></li>";
        } else {
            html += "</li>";
        }
        html += "<li><a href='#" + id + "'>" + text + "</a>";
        old_depth = new_depth;
    });
    html += "</li></ul>";
    $(".sidebar").append("<h3>Current Page</h3>");
    $(".sidebar").append(html);
}

function build() {
    for(i = 0; i < urls.length; i++) {
        var matches = document.location.href.match(urls[i][0])
        if (matches) {
            window[urls[i][1]](matches);
            break;
        }
    }
}

function build_edition(matches) {
    var edition = matches[1];
    var language = languages[matches[2]];
    var page = matches[3];
    var edition_text = "Edition " + edition + " (" + language + ")";
    link_logo("../../../index.html");
    add_notice_edition(edition);
    $(".sidebar").append("<h3><a href='../../../index.html'>Home</a></h3>");
    if (page == "index") {
        $(".sidebar").append(
            "<h3>" + edition_text + "</h3>"
        );
    } else {
        $(".sidebar").append(
            "<h3><a href='index.html'>" + edition_text + "</a></h3>"
        );
    }
    add_prev_link();
    add_next_link();
    add_toc();
}

function build_draft(matches) {
    var page = matches[1];
    link_logo("../index.html");
    add_notice_draft();
    $(".sidebar").append("<h3><a href='../index.html'>Home</a></h3>");
    if (page == "index") {
        $(".sidebar").append(
            "<h3>Draft Edition</h3>"
        );
    } else {
        $(".sidebar").append(
            "<h3><a href='index.html'>Draft Edition</a></h3>"
        );
    }
    add_prev_link();
    add_next_link();
    add_toc();
}

function build_index(matches) {
    link_logo("index.html");
}

function autolink() {
    $("*/[id!='']").wrap(function() {
        return "<a class='anchor' href='#" + $(this).attr("id") + "' />";
    });
}

function track() {
    _gat._getTracker("UA-17867702-1")._trackPageview();
}

document.onready = function() {
    try {
        check_flag();
        raise_flag();
        template();
        build();
        autolink();
        // track();
    } catch (error) {
        // uh oh
    }
}
