from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/books")
def books():
    return { "books": [{"name":"Travel", "author": "Peter"}, {"name": "Minimalist", "author": "Vincent"}, {"name": "Ghosts", "author": "Faith"}]}

@app.route("/about")
def about():
    return "About"

if __name__=="__main__":
    app.run(port=7000, debug=True)