from flask import Flask
from flask.templating import render_template
from pathlib import Path

app = Flask(__name__)


@app.route("/")
# @app.route("/index")
def index():
    return render_template("pages/index.html")


@app.route("/about")
def about():
    return render_template("pages/about.html")


@app.route("/auditions")
def auditions():
    return render_template("pages/auditions.html")


@app.route("/more")
def more():
    return render_template("pages/more.html")


@app.route("/test/no-sidebar")
def test0():
    return render_template("pages/no-sidebar.html")


@app.route("/test/left-sidebar")
def test1():
    return render_template("pages/left-sidebar.html")


@app.route("/test/right-sidebar")
def test2():
    return render_template("pages/right-sidebar.html")


if __name__ == "__main__":
    app.run(debug=True)  # TODO set false when deploy
