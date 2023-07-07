from flask import Flask, request
from flask_cors import CORS
from datetime import datetime
# from sample_data import my_data
from dotenv import load_dotenv
load_dotenv()
import os
from models import create_database, connect_to_db, show_databases, create_table, get_science_books, get_history_books

app = Flask(__name__)
CORS(app)

cnx = connect_to_db()
cursor = cnx.cursor()

@app.route("/about")
def about():
    return "About"

@app.route("/date")
def date():
    my_datetime = datetime.now()
    year = my_datetime.year
    return { "year": year}

@app.route("/science_books")
def science_books():
    science_books = get_science_books(cursor)
    return {"science": science_books}

@app.route("/history_books")
def history_books():
    history_books = get_history_books(cursor)

    return {"history": history_books}

@app.route("/science-data", methods=["POST"])
def science_data():
    name = request.json["name"]
    author = request.json["author"]
    price = request.json["price"]
    pages = request.json['pages']
    review = request.json["review"]

    # insert_into_science(cursor, name=name, author=author, price=price, pages=pages, review=review)
    try: 
        query = ("INSERT INTO science (name, author, price, pages, review) VALUES (%s,%s,%s,%s,%s)")
        query_vals = (name, author, price, pages, review)

        cursor.execute(query, query_vals)
        cnx.commit()
    except Exception as e:
        print(e)

    return {"message": "Data received from Form"}

# --------------------------------------------DB COMMANDS----------------------------------

@app.route("/connect_db")
def connect_to_db():
    return "Check command line if connected"

@app.route("/create_database")
def create_db():
    create_database(cursor)
    return "Check terminal"

@app.route("/databases")
def show_dbs():
    databases = show_databases(cursor)
    return {"databases": databases}


@app.route("/create_table")
def create_table():
    create_table(cursor)
    return create_table(cursor)

# --------------------------------------------DB COMMANDS----------------------------------

if __name__=="__main__":
    app.run(port=7000, debug=True)