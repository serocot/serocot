#!/usr/bin/env python
# -*- coding: utf-8 -*-

import flask
import random

serocot = flask.Flask(__name__)

@serocot.route('/')
def display_serocot():
    return flask.render_template('main.htm')


@serocot.route('/get_captcha')
def get_captcha():
	# later I will add the code to actually get a new captcha
	cnum = str(random.randint(1, 3))
	return str({'captcha': 'static/tmp/sample_' + cnum})


if __name__ == '__main__':
    serocot.run(debug=True)
