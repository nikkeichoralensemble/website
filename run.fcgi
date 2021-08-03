#!/home/n/ni/nice/website/env/bin/python3
import os
import sys

sys.path.insert(0, os.path.expanduser('~/public_html'))
from flup.server.fcgi import WSGIServer
from website.app import app

if __name__ == '__main__':
    WSGIServer(app).run()
