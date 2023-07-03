from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return { "names": ["Peter", "Vincent", "Faith"]}

@app.route("/about")
def about():
    return "About"

if __name__=="__main__":
    app.run(port=7000, debug=True)