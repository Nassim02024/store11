from flask import Flask , render_template , jsonify
import mysql.connector

app= Flask(__name__)


def getData():
    con = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    password = '',
    database = 'bencaseshopping'
)
    curs = con.cursor()
    curs.execute('select * from producting')
    res = curs.fetchall()
    return res

    curs.close()
    con.close()


@app.route('/')
def datas():
    data = getData()
    return render_template('myDatabase.html' , data=data)


if __name__ == '__main__':
    app.run(port=5001 , debug=True)
