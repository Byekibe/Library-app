import mysql.connector
from mysql.connector import errorcode
import os

# in this case we connected to a specific password
def connect_to_db():
    try:
        cnx = mysql.connector.connect(
            user=os.getenv("USER"),
            password=os.getenv("PASSWORD"),
            host=os.getenv("HOST"),
            database=os.getenv("DATABASE"),
            connect_timeout=28800
        )
        print(f"Connected to {os.getenv('DATABASE')} successfuly")
    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    else:
        print("Connected...Please close connection if you are not using it!!")
    
    return cnx


# Creating a database
def create_database(cursor):
    try:
        cursor.execute("CREATE DATABASE library")
        print("DB we_belong_created")
    except mysql.connector.Error as err:
        print("Failed creating database: {}".format(err))
        # exit(1)

def show_databases(cursor):
    try:
        cursor.execute("SHOW DATABASES")
        dbs = []
        for db in cursor:
            dbs.append(db)
        return dbs
    except mysql.connector.Error as err:
        print(f"Cannot Show Databases: {err}")
        # exit(1)

def create_table(cursor):
    try:
        cursor.execute("CREATE TABLE history (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), author VARCHAR(255), pages INT, review INT)")
        print("Table created Successfully")
    except mysql.connector.Error as err:
        print(f"Table could not be created: {err}")

    return "Table func Check command line"


def get_science_books(cursor):
    try:
        cursor.execute("SELECT * FROM science")
        science_books = []
        for book in cursor:
            science_books.append(book)
        
        print(science_books)
        return science_books

    except mysql.connector.Error as err:
        print(f"Could not get Science books: {err}")

# def insert_into_science(cursor, name, author, price, pages, review):
#     try:
#         query = ("INSERT INTO science (name, author, price, pages, review) VALUES (%s,%s,%s,%s,%s)")
#         query_vals = (cursor, name, author, price, pages, review)
#         cursor.execute(query, query_vals)
#     except mysql.connector.Error as err:
#         print(f"Could not insert into science table: {err}")

def get_history_books(cursor):
    try:
        cursor.execute("SELECT * FROM history")
        history_books = []
        for book in cursor:
            history_books.append(book)

        print(history_books)
        return history_books
    
    except mysql.connector.Error as err:
        print(f"Could not get History books: {err}")




# os.getenv("USER")
# os.getenv("PASSWORD")
# os.getenv("HOST")
# os.getenv("DATABASE")