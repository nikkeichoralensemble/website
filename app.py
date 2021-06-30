from pathlib import Path

from flask import Flask
from flask.templating import render_template

app = Flask(__name__, static_folder="assets", template_folder=".")


@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/auditions")
def auditions():
    return render_template("auditions.html")


@app.route("/hidden/base")
def template():
    return render_template("base.html")


@app.route("/hidden/new")
def newpage():
    return render_template("_newpage.html")


if __name__ == "__main__":
    app.run()
