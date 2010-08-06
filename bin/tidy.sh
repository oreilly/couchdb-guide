#!/bin/sh -e

tidy -q -m \
    --wrap 0 \
    --indent 1 \
    --indent-spaces 2 \
    --input-xml 0 \
    --output-xml 0 \
    --output-html 1 \
    --char-encoding utf8 \
    "$@"
