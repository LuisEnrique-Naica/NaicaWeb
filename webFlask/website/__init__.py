from flask import Flask, render_template, url_for

app = Flask(__name__)
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/finanzas")
def finanzas():
    return render_template('finanzas.html')