from flask import Flask
from flask.templating import render_template

app = Flask(__name__)


@app.route("/")
# @app.route("/index")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/auditions")
def faq():
    return render_template("auditions.html")


if __name__ == "__main__":
    app.run(debug=True)