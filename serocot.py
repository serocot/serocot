#!/usr/bin/env python
# -*- coding: utf-8 -*-

import flask

serocot = flask.Flask(__name__)

@serocot.route('/')
def display_serocot():
    return flask.render_template('main.htm')


if __name__ == '__main__':
    serocot.run(debug=True)
