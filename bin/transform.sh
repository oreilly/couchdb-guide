#!/bin/sh -e

xsltproc \
    --stringparam chunk.section.depth 0
    /opt/local/share/xsl/docbook-xsl/xhtml/chunk.xsl \
    "$1"
