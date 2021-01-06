from pathlib import Path

from flask import Flask
from flask.templating import render_template
# from flask.navigation import Navigation

app = Flask(__name__, static_folder="assets", template_folder="pages")
# nav = Navigation(app)
# nav.Bar('top', [
#     nav.Item('Home', 'index'),
#     nav.Item('Latest News', 'news', {'page': 1}),
# ])

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


@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/tmp")
def tmp():
    return render_template("_template.html")

if __name__ == "__main__":
    app.run(debug=True)  # TODO set false when deploy
