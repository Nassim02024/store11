from flask import Flask , render_template , request , jsonify
import mysql.connector
import pandas as pd

app = Flask(__name__)

df = pd.read_excel('Excel Prodact.xlsx')


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/home')
def home():
    return render_template('home.html', products=[])

@app.route('/search', methods=['POST'])  
def search():
    search = request.form.get('product_name') 
    if search and isinstance(search, str):
    
        products = df[df['ProductN'].str.contains(search, case=False, na=False)].to_dict(orient='records') 
       
        return render_template('home.html', products=products)
    else:
        products = [] 
    
    return render_template('home.html', products=products)





# Submit data ...

con = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    password = '',
    database = 'bencaseshopping'                                
)
mycor = con.cursor()



@app.route('/submit.data' , methods= ["POST"])
def submit_data():
    data = request.get_json()
    
    input_names = data ['input_names'] 
    input_location = data ['input_location'] 
    input_phone = data ['input_phone'] 
    input_tex = data ['input_tex']
    iner_text = data['iner_text']
    iner_total = data['iner_total']

    defult = ('INSERT INTO producting (names , location , phone , tex , product , total)  VALUES (%s , %s , %s , %s , %s , %s) ')
    values = (input_names , input_location , input_phone , input_tex , iner_text , iner_total)
    mycor.execute(defult , values)
    
    con.commit() 
    mycor.close()
    con.close()


if __name__ == '__main__':  
    app.run(port=5000 , debug=True)
    
    
    
    
