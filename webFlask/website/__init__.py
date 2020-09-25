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

@app.route("/ayuda")
def ayuda():
    return render_template('ayuda.html')
    
@app.route("/inicio")
def inicio():
    return render_template('inicio.html')
    
@app.route("/inversion")
def inversion():
    return render_template('opciones-inversion.html')
    
@app.route("/paypal")
def paypal():
    return render_template('paypal.html')
    
@app.route("/educacion-financiera")
def financiera():
    return render_template('educacion-financiera.html')

@app.route("/condiciones")
def condiciones():
    return render_template('condiciones.html')


@app.route("/error403")
def error403():
    return render_template('error403.html')